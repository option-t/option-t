import { assertIsPromise } from '../internal/assert';
import { ERR_MSG_TRANSFORMER_MUST_RETURN_PROMISE } from '../internal/ErrorMessage';
import type { AsyncTransformFn } from '../internal/Function';
import { Nullable } from './Nullable';
import {
    ERR_MSG_TRANSFORMER_MUST_NOT_RETURN_NO_VAL_FOR_NULLABLE,
    ERR_MSG_DEFAULT_VALUE_MUST_NOT_BE_NO_VAL_FOR_NULLABLE,
} from './ErrorMessage';
import { expectNotNull } from './expect';

function check<T>(value: Nullable<T>): T {
    const result = expectNotNull(value, ERR_MSG_TRANSFORMER_MUST_NOT_RETURN_NO_VAL_FOR_NULLABLE);
    return result;
}

/**
 *  Return the result of _transformer_ with using _input_ as an argument for it if _input_ is not `null`.
 *  Otherwise, return _defaultValue_.
 *
 *  Basically, this operation is a combination `map()` and `unwrapOr()`.
 *
 *  * `U` must not be `Nullable<*>`.
 *      * If the result of _transformer_ is `null`, this throw an `Error`.
 *      * If the result of _defaultValue_ is `null`, this throw an `Error`.
 *  * If you'd like to accept `Nullable<*>` as `U`, use a combination `andThen()` and `or()`.
 */
export function mapOrAsyncForNullable<T, U>(
    input: Nullable<T>,
    defaultValue: U,
    transformer: AsyncTransformFn<T, U>
): Promise<U> {
    if (input === null) {
        const nonNullDefault = expectNotNull(
            defaultValue,
            ERR_MSG_DEFAULT_VALUE_MUST_NOT_BE_NO_VAL_FOR_NULLABLE
        );
        return Promise.resolve(nonNullDefault);
    }

    const transformed: Promise<U> = transformer(input);
    // If this is async function, this always return Promise, but not.
    // We should check to clarify the error case if user call this function from plain js
    // and they mistake to use this.
    assertIsPromise(transformed, ERR_MSG_TRANSFORMER_MUST_RETURN_PROMISE);

    const result: Promise<U> = transformed.then(check);
    return result;
}
