import type { AsyncTransformFn } from '../../internal/function.js';
import { type Result, createErr, isOk } from '../core/result.js';
import { unsafeUnwrapValueInErrWithoutAnyCheck } from '../internal/intrinsics_unsafe.js';

/**
 *  Maps a `Result<T, E>` to `Result<T, F>` by applying a _transformer_ function `mapFn<E, F>`
 *  to an contained `Err(E)` value, leaving an `Ok(T)` value untouched.
 *
 *  This function can be used to pass through a successful result while handling an error.
 */
export async function mapErrAsyncForResult<T, E, F>(
    input: Result<T, E>,
    transformer: AsyncTransformFn<E, F>,
): Promise<Result<T, F>> {
    if (isOk(input)) {
        return input;
    }

    const err: E = unsafeUnwrapValueInErrWithoutAnyCheck(input);
    const e: F = await transformer(err);
    const result: Result<T, F> = createErr(e);
    return result;
}
