import { TransformFn } from '../shared/Function';
import { Nullable, isNotNull } from './Nullable';

export type NullableTryTransformFn<T, U> = TransformFn<T, Nullable<U>>;

/**
 *  @deprecated Use NullableTryTransformFn in the same module.
 */
export type FlatmapFn<T, U> = NullableTryTransformFn<T, U>;

/**
 *  Returns `null` if the _src_ is `null`,
 *  otherwise calls _selector_ with the value and returns the result.
 *
 *  XXX:
 *  Some languages call this operation flatmap.
 *  But we don't provide `flatMap()` as alias of this function.
 *  because it's too hard to undarstand that "flatMap" operation for `T | null`
 */
export function andThenForNullable<T, U>(
    src: Nullable<T>,
    selector: NullableTryTransformFn<T, U>
): Nullable<U> {
    if (isNotNull(src)) {
        const r = selector(src);
        return r;
    } else {
        return src;
    }
}
