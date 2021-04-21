import { TransformFn } from '../shared/Function';
import { Result, Err, createOk } from './Result';

/**
 *  Maps a `Result<T, E>` to `Result<U, E>` by applying a _selector_ function
 *  to an contained `Ok(T)` value, leaving an `Err(E)` value untouched.
 *
 *  This function can be used to compose the results of two functions.
 */
export function mapForResult<T, U, E>(
    src: Result<T, E>,
    selector: TransformFn<T, U>
): Result<U, E> {
    if (src.ok) {
        const r: U = selector(src.val);
        return createOk(r);
    } else {
        const s: Err<E> = src;
        return s;
    }
}
