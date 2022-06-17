import { assertIsPromise } from '../internal/assert';
import { ERR_MSG_TRANSFORMER_MUST_RETURN_PROMISE } from '../internal/ErrorMessage';
import type { AsyncTransformFn } from '../internal/Function';

import { Maybe, isNullOrUndefined, NotNullAndUndefined } from './Maybe';
import { expectNotNullAndUndefined } from './expect';
import { ERR_MSG_TRANSFORMER_MUST_NOT_RETURN_NO_VAL_FOR_MAYBE } from './ErrorMessage';

function check<T>(value: Maybe<T>): T {
    const passed = expectNotNullAndUndefined(
        value,
        ERR_MSG_TRANSFORMER_MUST_NOT_RETURN_NO_VAL_FOR_MAYBE
    );
    return passed;
}

/**
 *  Return the result of _transformer_ with using _input_ as an argument for it if _input_ is not `null` and `undefined`.
 *  Otherwise, return `null` or `undefined` inputted as _input_.
 *
 *  * `U` must not be `Maybe<*>`.
 *      * If you'd like return `Maybe<*>` as `U`, use `andThen()`.
 *      * If the result of _transformer_ is `null` or `undefined`, this throw an `Error`.
 */
export function mapAsyncForMaybe<T, U>(
    input: Maybe<T>,
    transformer: AsyncTransformFn<T, NotNullAndUndefined<U>>
): Promise<Maybe<U>> {
    if (isNullOrUndefined(input)) {
        return Promise.resolve(input);
    }

    const result = transformer(input);
    // If this is async function, this always return Promise, but not.
    // We should check to clarify the error case if user call this function from plain js
    // and they mistake to use this.
    assertIsPromise(result, ERR_MSG_TRANSFORMER_MUST_RETURN_PROMISE);

    // XXX:
    // If `U` is `Maybe<SomeType>`, we think naturally the returned value of this function would be
    // the nested type `Maybe<Maybe<SomeType>>`. But this type means `(SomeType | null | undefined) | null | undefined`.
    // So a type checker would recognize this type as `SomeType | null | undefined`. So it's flattened.
    // Then the user should call `andThen` (_flatmap_) operation instead of this.
    const passed = result.then(check);
    return passed;
}
