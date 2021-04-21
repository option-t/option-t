import { TransformFn } from '../shared/Function';
import { Undefinable, isNotUndefined } from './Undefinable';

export type UndefinableTryTransformFn<T, U> = TransformFn<T, Undefinable<U>>;

/**
 *  @deprecated Use UndefinableTryTransformFn in the same module.
 */
export type FlatmapFn<T, U> = UndefinableTryTransformFn<T, U>;

/**
 *  Returns `undefined` if the _src_ is `undefined`,
 *  otherwise calls _selector_ with the value and returns the result.
 *
 *  XXX:
 *  Some languages call this operation flatmap.
 *  But we don't provide `flatMap()` as alias of this function.
 *  because it's too hard to undarstand that "flatMap" operation for `T | undefined`
 */
export function andThenForUndefinable<T, U>(
    src: Undefinable<T>,
    selector: UndefinableTryTransformFn<T, U>
): Undefinable<U> {
    if (isNotUndefined(src)) {
        const r = selector(src);
        return r;
    } else {
        return src;
    }
}
