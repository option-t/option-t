import { assertIsPromise } from '../internal/assert';
import { ERR_MSG_TRANSFORMER_MUST_RETURN_PROMISE } from '../internal/ErrorMessage';
import type { AsyncTransformFn } from '../internal/Function';
import { Result, Err, createOk, isErr } from './Result';
import { unwrapFromResult } from './unwrap';

/**
 *  Maps a `Result<T, E>` to `Result<U, E>` by applying a _transformer_ function
 *  to an contained `Ok(T)` value, leaving an `Err(E)` value untouched.
 *
 *  This function can be used to compose the results of two functions.
 */
export function mapAsyncForResult<T, U, E>(
    input: Result<T, E>,
    transformer: AsyncTransformFn<T, U>
): Promise<Result<U, E>> {
    if (isErr(input)) {
        const s: Err<E> = input;
        return Promise.resolve(s);
    }

    const inner: T = unwrapFromResult(input);
    const transformed: Promise<U> = transformer(inner);
    // If this is async function, this always return Promise, but not.
    // We should check to clarify the error case if user call this function from plain js
    // and they mistake to use this.
    assertIsPromise(transformed, ERR_MSG_TRANSFORMER_MUST_RETURN_PROMISE);
    const result: Promise<Result<U, E>> = transformed.then(createOk);
    return result;
}
