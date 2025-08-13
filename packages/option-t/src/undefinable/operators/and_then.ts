import type { TransformFn } from '../../internal/function.js';
import { type Undefinable, isUndefined } from '../core/undefinable.js';

export type UndefinableTryTransformFn<in T, out U> = TransformFn<T, Undefinable<U>>;

/**
 *  Returns `undefined` if the _input_ is `undefined`,
 *  otherwise calls _transformer_ with the value and returns the result.
 *
 *  XXX:
 *  Some languages call this operation flatmap.
 *  But we don't provide `flatMap()` as alias of this function.
 *  because it's too hard to undarstand that "flatMap" operation for `T | undefined`
 */
export function andThenForUndefinable<T, U>(
    input: Undefinable<T>,
    transformer: UndefinableTryTransformFn<T, U>,
): Undefinable<U> {
    if (isUndefined(input)) {
        return input;
    }

    const result = transformer(input);
    return result;
}
