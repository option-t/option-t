import type { TransformFn } from '../../internal/function.js';
import { type Maybe, isNullOrUndefined } from '../core/maybe.js';

export type MaybeTryTransformFn<in T, out U> = TransformFn<T, Maybe<U>>;

/**
 *  Returns `null` or `undefined` if the _input_ is `null` or `undefined`,
 *  otherwise calls _transformer_ with the value and returns the result.
 *
 *  XXX:
 *  Some languages call this operation flatmap.
 *  But we don't provide `flatMap()` as alias of this function.
 *  because it's too hard to undarstand that "flatMap" operation for `T | null | undefined`.
 */
export function andThenForMaybe<T, U>(
    input: Maybe<T>,
    transformer: MaybeTryTransformFn<T, U>,
): Maybe<U> {
    if (isNullOrUndefined(input)) {
        return input;
    }

    const result = transformer(input);
    return result;
}
