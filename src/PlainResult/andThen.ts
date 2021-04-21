import { TransformFn } from '../shared/Function';
import { Result } from './Result';

export type ResultTryTransformFn<T, U, E> = TransformFn<T, Result<U, E>>;

/**
 *  @deprecated Use ResultTryTransformFn in the same module.
 */
export type FlatmapOkFn<T, U, E> = ResultTryTransformFn<T, U, E>;

/**
 *  Returns `Err(E)` if the _src_ is `Err(E)`,
 *  otherwise calls _selector_ with the value and returns the result.
 *
 *  XXX:
 *  Some languages call this operation flatmap.
 *  But we don't provide `flatMap()` as alias of this function
 *  to sort with other APIs.
 */
export function andThenForResult<T, U, E>(
    src: Result<T, E>,
    selector: ResultTryTransformFn<T, U, E>
): Result<U, E> {
    if (src.ok) {
        const r = selector(src.val);
        return r;
    } else {
        return src;
    }
}
