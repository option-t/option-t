import { TransformFn, RecoveryFromErrorFn } from '../internal/Function';
import { Result } from './Result';

export type { TransformFn, RecoveryFromErrorFn };

/**
 *  Maps a `Result<T, E>` to `U` by applying _transformer_ to a contained `Ok(T)` value in _input_,
 *  or a _recoverer_ function to a contained `Err(E)` value in _input_.
 *  This function can be used to unpack a successful result while handling an error.
 */
export function mapOrElseForResult<T, E, U>(
    input: Result<T, E>,
    recoverer: RecoveryFromErrorFn<E, U>,
    transformer: TransformFn<T, U>
): U {
    if (input.ok) {
        const result: U = transformer(input.val);
        return result;
    }

    const fallback: U = recoverer(input.err);
    return fallback;
}
