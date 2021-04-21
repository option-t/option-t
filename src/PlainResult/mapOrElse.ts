import { TransformFn, RecoveryFromErrorFn } from '../shared/Function';
import { Result } from './Result';

/**
 *  Maps a `Result<T, E>` to `U` by applying _selector_ to a contained `Ok(T)` value in _src_,
 *  or a _fallback_ function to a contained `Err(E)` value in _src_.
 *  This function can be used to unpack a successful result while handling an error.
 */
export function mapOrElseForResult<T, E, U>(
    src: Result<T, E>,
    fallback: RecoveryFromErrorFn<E, U>,
    selector: TransformFn<T, U>
): U {
    if (src.ok) {
        const r: U = selector(src.val);
        return r;
    } else {
        const r: U = fallback(src.err);
        return r;
    }
}
