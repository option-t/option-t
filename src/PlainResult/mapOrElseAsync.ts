import { MapFn, RecoveryWithErrorFn } from '../shared/Function';
import { Result, isOk } from './Result';
import { unwrapFromResult, unwrapErrFromResult } from './unwrap';

/**
 *  Maps a `Result<T, E>` to `U` by applying _selector_ to a contained `Ok(T)` value in _src_,
 *  or a _fallback_ function to a contained `Err(E)` value in _src_.
 *  This function can be used to unpack a successful result while handling an error.
 */
export function mapOrElseAsyncForResult<T, E, U>(
    src: Result<T, E>,
    fallback: RecoveryWithErrorFn<E, Promise<U>>,
    selector: MapFn<T, Promise<U>>
): Promise<U> {
    if (isOk(src)) {
        const inner: T = unwrapFromResult(src);
        const result: Promise<U> = selector(inner);
        return result;
    }

    const err: E = unwrapErrFromResult(src);
    const result: Promise<U> = fallback(err);
    return result;
}
