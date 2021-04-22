import { TransformFn, RecoveryFromErrorFn } from '../shared/Function';
import { Result } from './Result';

/**
 *  Maps a `Result<T, E>` to `U` by applying _transformer_ to a contained `Ok(T)` value in _input_,
 *  or a _fallback_ function to a contained `Err(E)` value in _input_.
 *  This function can be used to unpack a successful result while handling an error.
 */
export function mapOrElseForResult<T, E, U>(
    input: Result<T, E>,
    fallback: RecoveryFromErrorFn<E, U>,
    transformer: TransformFn<T, U>
): U {
    if (input.ok) {
        const r: U = transformer(input.val);
        return r;
    } else {
        const r: U = fallback(input.err);
        return r;
    }
}
