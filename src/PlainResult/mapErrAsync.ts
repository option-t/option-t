import { assertIsPromise } from '../internal/assert';
import { ERR_MSG_TRANSFORMER_MUST_RETURN_PROMISE } from '../internal/ErrorMessage';
import type { AsyncTransformFn } from '../internal/Function';
import { Result, createErr, isOk, Ok } from './Result';

/**
 *  Maps a `Result<T, E>` to `Result<T, F>` by applying a _transformer_ function `mapFn<E, F>`
 *  to an contained `Err(E)` value, leaving an `Ok(T)` value untouched.
 *
 *  This function can be used to pass through a successful result while handling an error.
 */
export function mapErrAsyncForResult<T, E, F>(
    input: Result<T, E>,
    transformer: AsyncTransformFn<E, F>
): Promise<Result<T, F>> {
    if (isOk(input)) {
        const s: Ok<T> = input;
        return Promise.resolve(s);
    }

    const result: Promise<F> = transformer(input.err);
    // If this is async function, this always return Promise, but not.
    // We should check to clarify the error case if user call this function from plain js
    // and they mistake to use this.
    assertIsPromise(result, ERR_MSG_TRANSFORMER_MUST_RETURN_PROMISE);
    const passed: Promise<Result<T, F>> = result.then(createErr);
    return passed;
}
