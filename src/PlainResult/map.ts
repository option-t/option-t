import { MapFn } from '../shared/Function';
import { Result, Err, createOk } from './Result';

/**
 *  Maps a `Result<T, E>` to `Result<U, E>` by applying a _selector_ function
 *  to an contained `Ok(T)` value, leaving an `Err(E)` value untouched.
 *
 *  This function can be used to compose the results of two functions.
 */
export function mapForResult<T, U, TError>(src: Result<T, TError>, selector: MapFn<T, U>): Result<U, TError> {
    if (src.ok) {
        const r: U = selector(src.val);
        return createOk(r);
    }
    else {
        const s: Err<TError> = src;
        return s;
    }
}
