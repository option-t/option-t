import { assertIsPromise } from '../shared/assert';
import { ERR_MSG_TRANSFORMER_MUST_RETURN_PROMISE } from '../shared/ErrorMessage';
import type { MapFn } from '../shared/Function';
import { Result, Err, createOk, isErr } from './Result';
import { unwrapFromResult } from './unwrap';

/**
 *  Maps a `Result<T, E>` to `Result<U, E>` by applying a _selector_ function
 *  to an contained `Ok(T)` value, leaving an `Err(E)` value untouched.
 *
 *  This function can be used to compose the results of two functions.
 */
export function mapAsyncForResult<T, U, E>(
    src: Result<T, E>,
    transformer: MapFn<T, Promise<U>>
): Promise<Result<U, E>> {
    if (isErr(src)) {
        const s: Err<E> = src;
        return Promise.resolve(s);
    }

    const inner: T = unwrapFromResult(src);
    const transformed: Promise<U> = transformer(inner);
    // If this is async function, this always return Promise, but not.
    // We should check to clarify the error case if user call this function from plain js
    // and they mistake to use this.
    assertIsPromise(transformed, ERR_MSG_TRANSFORMER_MUST_RETURN_PROMISE);
    const result: Promise<Result<U, E>> = transformed.then(createOk);
    return result;
}
