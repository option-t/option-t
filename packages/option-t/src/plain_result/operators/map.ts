import type { TransformFn } from '../../internal/function.js';
import { type Result, createOk, isErr } from '../core/result.js';
import { unsafeUnwrapValueInOkWithoutAnyCheck } from '../internal/intrinsics_unsafe.js';

/**
 *  Maps a `Result<T, E>` to `Result<U, E>` by applying a _transformer_ function
 *  to an contained `Ok(T)` value, leaving an `Err(E)` value untouched.
 *
 *  This function can be used to compose the results of two functions.
 */
export function mapForResult<T, U, E>(
    input: Result<T, E>,
    transformer: TransformFn<T, U>,
): Result<U, E> {
    if (isErr(input)) {
        return input;
    }

    const val: T = unsafeUnwrapValueInOkWithoutAnyCheck(input);
    const result: U = transformer(val);
    return createOk(result);
}
