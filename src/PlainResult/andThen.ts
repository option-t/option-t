import { TransformFn } from '../internal/Function';
import { Result } from './Result';

export type ResultTryTransformFn<T, U, E> = TransformFn<T, Result<U, E>>;

/**
 *  @deprecated Use ResultTryTransformFn in the same module.
 */
export type FlatmapOkFn<T, U, E> = ResultTryTransformFn<T, U, E>;

/**
 *  Returns `Err(E)` if the _input_ is `Err(E)`,
 *  otherwise calls _transformer_ with the value and returns the result.
 *
 *  XXX:
 *  Some languages call this operation flatmap.
 *  But we don't provide `flatMap()` as alias of this function
 *  to sort with other APIs.
 */
export function andThenForResult<T, U, E>(
    input: Result<T, E>,
    transformer: ResultTryTransformFn<T, U, E>
): Result<U, E> {
    if (!input.ok) {
        return input;
    }

    const transformed = transformer(input.val);
    return transformed;
}
