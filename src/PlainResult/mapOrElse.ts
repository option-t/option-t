import { MapFn, RecoveryWithErrorFn } from '../shared/Function.ts';
import { Result } from './Result.ts';

/**
 *  Maps a `Result<T, E>` to `U` by applying _selector_ to a contained `Ok(T)` value in _src_,
 *  or a _fallback_ function to a contained `Err(E)` value in _src_.
 *  This function can be used to unpack a successful result while handling an error.
 */
export function mapOrElseForResult<T, E, U>(src: Result<T, E>, fallback: RecoveryWithErrorFn<E, U>, selector: MapFn<T, U>): U {
    if (src.ok) {
        const r: U = selector(src.val);
        return r;
    }
    else {
        const r: U = fallback(src.err);
        return r;
    }
}
