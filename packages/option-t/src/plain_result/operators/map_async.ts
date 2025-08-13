import type { AsyncTransformFn } from '../../internal/function.js';
import { type Result, type Err, createOk, isErr } from '../core/result.js';
import { unsafeUnwrapValueInOkWithoutAnyCheck } from '../internal/intrinsics_unsafe.js';

/**
 *  Maps a `Result<T, E>` to `Result<U, E>` by applying a _transformer_ function
 *  to an contained `Ok(T)` value, leaving an `Err(E)` value untouched.
 *
 *  This function can be used to compose the results of two functions.
 */
export async function mapAsyncForResult<T, U, E>(
    input: Result<T, E>,
    transformer: AsyncTransformFn<T, U>,
): Promise<Result<U, E>> {
    if (isErr(input)) {
        const fallback: Err<E> = input;
        return fallback;
    }

    const inner: T = unsafeUnwrapValueInOkWithoutAnyCheck(input);
    const mapped: U = await transformer(inner);
    const result: Result<U, E> = createOk(mapped);
    return result;
}
