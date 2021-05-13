import type { AsyncTransformFn } from '../internal/Function';
import { Nullable, isNull } from './Nullable';
import { ERR_MSG_TRANSFORMER_MUST_NOT_RETURN_NO_VAL_FOR_NULLABLE } from './ErrorMessage';
import { expectNotNull } from './expect';
import { assertIsPromise } from '../internal/assert';
import { ERR_MSG_TRANSFORMER_MUST_RETURN_PROMISE } from '../internal/ErrorMessage';

function check<T>(value: Nullable<T>): T {
    const result = expectNotNull(value, ERR_MSG_TRANSFORMER_MUST_NOT_RETURN_NO_VAL_FOR_NULLABLE);
    return result;
}

/**
 *  Return the result of _transformer_ with using _input_ as an argument for it if _input_ is not `null`,
 *  Otherwise, return `null`.
 *
 *  * `U` must not be `Nullable<*>`.
 *      * If you'd like return `Nullable<*>` as `U`, use `andThen()`.
 *      * If the result of _transformer_ is `null`, this throw an `Error`.
 */
export function mapAsyncForNullable<T, U>(
    input: Nullable<T>,
    transformer: AsyncTransformFn<T, U>
): Promise<Nullable<U>> {
    if (isNull(input)) {
        return Promise.resolve(input);
    }

    const transformed = transformer(input);
    // If this is async function, this always return Promise, but not.
    // We should check to clarify the error case if user call this function from plain js
    // and they mistake to use this.
    assertIsPromise(transformed, ERR_MSG_TRANSFORMER_MUST_RETURN_PROMISE);

    // XXX:
    // If `U` is `Nullable<SomeType>`, we think naturally the returned value of this function would be
    // the nested type `Nullable<Nullable<SomeType>>`. But this type means `(SomeType | null) | null`.
    // So a type checker would recognize this type as `SomeType | null`. So it's flattened.
    // Then the user should call `andThen` (_flatmap_) operation instead of this.
    const result = transformed.then(check);

    return result;
}
