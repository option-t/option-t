import type { AsyncTransformFn } from '../../internal/function.js';

import { type Maybe, isNullOrUndefined } from '../core/maybe.js';

export type MaybeAsyncTryTransformFn<in T, out U> = AsyncTransformFn<T, Maybe<U>>;

/**
 *  Returns `null` or `undefined` if the _input_ is `null` or `undefined`,
 *  otherwise calls _transformer_ with the value and returns the result.
 *
 *  XXX:
 *  Some languages call this operation flatmap.
 *  But we don't provide `flatMap()` as alias of this function.
 *  because it's too hard to undarstand that "flatMap" operation for `T | null | undefined`.
 */
export async function andThenAsyncForMaybe<T, U>(
    input: Maybe<T>,
    transformer: MaybeAsyncTryTransformFn<T, U>,
): Promise<Maybe<U>> {
    if (isNullOrUndefined(input)) {
        return input;
    }

    const result: Maybe<U> = await transformer(input);
    return result;
}
