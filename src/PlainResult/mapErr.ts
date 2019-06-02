import { MapFn } from '../shared/Function';
import { Result, createErr } from './Result';

/**
 *  Maps a `Result<T, E>` to `Result<T, F>` by applying a _selector_ function `mapFn<E, F>`
 *  to an contained `Err(E)` value, leaving an `Ok(T)` value untouched.
 *
 *  This function can be used to pass through a successful result while handling an error.
 */
export function mapErrForResult<T, E, F>(src: Result<T, E>, selector: MapFn<E, F>): Result<T, F> {
    if (!src.ok) {
        const r: F = selector(src.err);
        return createErr<F>(r);
    }
    else {
        return src;
    }
}
