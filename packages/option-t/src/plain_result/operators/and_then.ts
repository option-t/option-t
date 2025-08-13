import type { TransformFn } from '../../internal/function.js';
import { isErr, type Result } from '../core/result.js';
import { unsafeUnwrapValueInOkWithoutAnyCheck } from '../internal/intrinsics_unsafe.js';

export type ResultTryTransformFn<in T, out U, out E> = TransformFn<T, Result<U, E>>;

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
    transformer: ResultTryTransformFn<T, U, E>,
): Result<U, E> {
    if (isErr(input)) {
        return input;
    }

    const val: T = unsafeUnwrapValueInOkWithoutAnyCheck(input);
    const result = transformer(val);
    return result;
}
