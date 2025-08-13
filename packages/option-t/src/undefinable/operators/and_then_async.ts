import type { AsyncTransformFn } from '../../internal/function.js';

import { type Undefinable, isUndefined } from '../core/undefinable.js';

export type UndefinableAsyncTryTransformFn<in T, out U> = AsyncTransformFn<T, Undefinable<U>>;

/**
 *  Returns `undefined` if the _input_ is `undefined`,
 *  otherwise calls _transformer_ with the value and returns the result.
 *
 *  XXX:
 *  Some languages call this operation flatmap.
 *  But we don't provide `flatMap()` as alias of this function.
 *  because it's too hard to undarstand that "flatMap" operation for `T | undefined`
 */
export async function andThenAsyncForUndefinable<T, U>(
    input: Undefinable<T>,
    transformer: UndefinableAsyncTryTransformFn<T, U>,
): Promise<Undefinable<U>> {
    if (isUndefined(input)) {
        return undefined;
    }

    const result: Undefinable<U> = await transformer(input);
    return result;
}
