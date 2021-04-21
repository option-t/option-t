import { assertIsPromise } from '../shared/assert';
import { ERR_MSG_TRANSFORMER_MUST_RETURN_PROMISE } from '../shared/ErrorMessage';
import type { AsyncTransformFn } from '../shared/Function';
import { Result, createErr, isOk, Ok } from './Result';

/**
 *  Maps a `Result<T, E>` to `Result<T, F>` by applying a _transformer_ function `mapFn<E, F>`
 *  to an contained `Err(E)` value, leaving an `Ok(T)` value untouched.
 *
 *  This function can be used to pass through a successful result while handling an error.
 */
export function mapErrAsyncForResult<T, E, F>(
    src: Result<T, E>,
    transformer: AsyncTransformFn<E, F>
): Promise<Result<T, F>> {
    if (isOk(src)) {
        const s: Ok<T> = src;
        return Promise.resolve(s);
    }

    const transformed: Promise<F> = transformer(src.err);
    // If this is async function, this always return Promise, but not.
    // We should check to clarify the error case if user call this function from plain js
    // and they mistake to use this.
    assertIsPromise(transformed, ERR_MSG_TRANSFORMER_MUST_RETURN_PROMISE);
    const result: Promise<Result<T, F>> = transformed.then(createErr);
    return result;
}
