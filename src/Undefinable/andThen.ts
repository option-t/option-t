import { TransformFn } from '../internal/Function';
import { Undefinable, isUndefined } from './Undefinable';

export type UndefinableTryTransformFn<T, U> = TransformFn<T, Undefinable<U>>;

/**
 *  @deprecated Use UndefinableTryTransformFn in the same module.
 */
export type FlatmapFn<T, U> = UndefinableTryTransformFn<T, U>;

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
    transformer: UndefinableTryTransformFn<T, U>
): Undefinable<U> {
    if (isUndefined(input)) {
        return input;
    }

    const result = transformer(input);
    return result;
}
