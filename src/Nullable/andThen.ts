import { MapFn } from '../utils/Function';
import { Nullable } from './Nullable';

export type FlatmapFn<T, U> = MapFn<T, Nullable<U>>;

/**
 *  Returns `null` if the _src_ is `null`,
 *  otherwise calls _selector_ with the value and returns the result.
 *
 *  XXX:
 *  Some languages call this operation flatmap.
 *  But we don't provide `flatMap()` as alias of this function.
 *  because it's too hard to undarstand that "flatMap" operation for `T | null`
 */
export function andThenForNullable<T, U>(src: Nullable<T>, selector: FlatmapFn<T, U>): Nullable<U> {
    if (src !== null) {
        const r = selector(src);
        return r;
    }
    else {
        return src;
    }
}
