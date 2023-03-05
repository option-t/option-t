import type { AsyncTransformFn } from '../internal/function.js';
import { type Undefinable, isUndefined, type NotUndefined } from './Undefinable.js';
import { ERR_MSG_TRANSFORMER_MUST_NOT_RETURN_NO_VAL_FOR_UNDEFINABLE } from './internal/error_message.js';
import { expectNotUndefined } from './expect.js';
import { assertIsPromise } from '../internal/assert.js';
import { ERR_MSG_TRANSFORMER_MUST_RETURN_PROMISE } from '../internal/error_message.js';

function check<T>(value: Undefinable<T>): T {
    const passed = expectNotUndefined(
        value,
        ERR_MSG_TRANSFORMER_MUST_NOT_RETURN_NO_VAL_FOR_UNDEFINABLE
    );
    return passed;
}

/**
 *  Return the result of _transformer_ with using _input_ as an argument for it if _input_ is not `undefined`,
 *  Otherwise, return `undefined`.
 *
 *  * `U` must not be `Undefinable<*>`.
 *      * If you'd like return `Undefinable<*>` as `U`, use `andThen()`.
 *      * If the result of _transformer_ is `undefined`, this throw an `Error`.
 */
export function mapAsyncForUndefinable<T, U>(
    input: Undefinable<T>,
    transformer: AsyncTransformFn<T, NotUndefined<U>>
): Promise<Undefinable<U>> {
    if (isUndefined(input)) {
        return Promise.resolve(input);
    }

    const result = transformer(input);
    // If this is async function, this always return Promise, but not.
    // We should check to clarify the error case if user call this function from plain js
    // and they mistake to use this.
    assertIsPromise(result, ERR_MSG_TRANSFORMER_MUST_RETURN_PROMISE);

    // XXX:
    // If `U` is `Undefinable<SomeType>`, we think naturally the returned value of this function would be
    // the nested type `Undefinable<Undefinable<SomeType>>`. But this type means `(SomeType | undefined) | undefined`.
    // So a type checker would recognize this type as `SomeType | undefined`. So it's flattened.
    // Then the user should call `andThen` (_flatmap_) operation instead of this.
    const passed = result.then(check);

    return passed;
}
