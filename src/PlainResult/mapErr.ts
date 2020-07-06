import { MapFn } from '../shared/Function';
import { Result, createErr } from './Result';

/**
 *  Maps a `Result<T, TError>` to `Result<T, TAnotherError>` by applying a _selector_ function `mapFn<TError, TAnotherError>`
 *  to an contained `Err(TError)` value, leaving an `Ok(T)` value untouched.
 *
 *  This function can be used to pass through a successful result while handling an error.
 */
export function mapErrForResult<T, TError, TAnotherError>(src: Result<T, TError>, selector: MapFn<TError, TAnotherError>): Result<T, TAnotherError> {
    if (!src.ok) {
        const r: TAnotherError = selector(src.err);
        return createErr<TAnotherError>(r);
    }
    else {
        return src;
    }
}
