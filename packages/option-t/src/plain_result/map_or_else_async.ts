import type { AsyncTransformFn, AsyncRecoveryFromErrorFn } from '../internal/function.js';
import { type Result, isOk, unwrapOk, unwrapErr } from './result.js';

/**
 *  Maps a `Result<T, E>` to `U` by applying _transformer_ to a contained `Ok(T)` value in _input_,
 *  or a _recoverer_ function to a contained `Err(E)` value in _input_.
 *  This function can be used to unpack a successful result while handling an error.
 */
export async function mapOrElseAsyncForResult<T, E, U>(
    input: Result<T, E>,
    recoverer: AsyncRecoveryFromErrorFn<E, U>,
    transformer: AsyncTransformFn<T, U>,
): Promise<U> {
    if (isOk(input)) {
        const inner: T = unwrapOk(input);
        const result: U = await transformer(inner);
        return result;
    }

    const err: E = unwrapErr(input);
    const fallback: U = await recoverer(err);
    return fallback;
}
