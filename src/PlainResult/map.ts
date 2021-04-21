import { TransformFn } from '../shared/Function';
import { Result, Err, createOk } from './Result';

/**
 *  Maps a `Result<T, E>` to `Result<U, E>` by applying a _transformer_ function
 *  to an contained `Ok(T)` value, leaving an `Err(E)` value untouched.
 *
 *  This function can be used to compose the results of two functions.
 */
export function mapForResult<T, U, E>(
    input: Result<T, E>,
    transformer: TransformFn<T, U>
): Result<U, E> {
    if (input.ok) {
        const r: U = transformer(input.val);
        return createOk(r);
    } else {
        const s: Err<E> = input;
        return s;
    }
}
