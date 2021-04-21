import { assertIsPromise } from '../shared/assert';
import {
    ERR_MSG_RECOVERER_MUST_RETURN_PROMISE,
    ERR_MSG_TRANSFORMER_MUST_RETURN_PROMISE,
} from '../shared/ErrorMessage';
import { MapFn, RecoveryWithErrorFn } from '../shared/Function';
import { Result, isOk } from './Result';
import { unwrapFromResult, unwrapErrFromResult } from './unwrap';

/**
 *  Maps a `Result<T, E>` to `U` by applying _transformer_ to a contained `Ok(T)` value in _src_,
 *  or a _recoverer_ function to a contained `Err(E)` value in _src_.
 *  This function can be used to unpack a successful result while handling an error.
 */
export function mapOrElseAsyncForResult<T, E, U>(
    src: Result<T, E>,
    recoverer: RecoveryWithErrorFn<E, Promise<U>>,
    transformer: MapFn<T, Promise<U>>
): Promise<U> {
    if (isOk(src)) {
        const inner: T = unwrapFromResult(src);
        const transformed: Promise<U> = transformer(inner);
        // If this is async function, this always return Promise, but not.
        // We should check to clarify the error case if user call this function from plain js
        // and they mistake to use this.
        assertIsPromise(transformed, ERR_MSG_TRANSFORMER_MUST_RETURN_PROMISE);
        return transformed;
    }

    const err: E = unwrapErrFromResult(src);
    const defaultValue: Promise<U> = recoverer(err);
    // If this is async function, this always return Promise, but not.
    // We should check to clarify the error case if user call this function from plain js
    // and they mistake to use this.
    assertIsPromise(defaultValue, ERR_MSG_RECOVERER_MUST_RETURN_PROMISE);
    return defaultValue;
}
