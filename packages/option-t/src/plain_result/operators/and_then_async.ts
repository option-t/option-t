import type { AsyncTransformFn } from '../../internal/function.js';
import { type Result, isErr } from '../core/result.js';
import { unsafeUnwrapValueInOkWithoutAnyCheck } from '../internal/intrinsics_unsafe.js';

export type ResultAsyncTryTransformFn<in T, out U, out E> = AsyncTransformFn<T, Result<U, E>>;

/**
 *  Returns `Promise<Err(E)>` if the _input_ is `Err(E)`,
 *  otherwise calls _transformer_ with the value and returns the result.
 *
 *  XXX:
 *  Some languages call this operation flatmap.
 *  But we don't provide `flatMap()` as alias of this function
 *  to sort with other APIs.
 */
export async function andThenAsyncForResult<T, U, E>(
    input: Result<T, E>,
    transformer: ResultAsyncTryTransformFn<T, U, E>,
): Promise<Result<U, E>> {
    if (isErr(input)) {
        return input;
    }

    const source: T = unsafeUnwrapValueInOkWithoutAnyCheck(input);
    const result: Result<U, E> = await transformer(source);
    return result;
}
