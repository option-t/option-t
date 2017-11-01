import { Nullable, isNotNull } from './Nullable';

/**
 *  Returns `null` if the `src` is `null`,
 *  otherwise calls `fn` with the value and returns the result.
 *
 *  XXX:
 *  Some languages call this operation flatmap.
 *  But we don't provide `flatMap()` as alias of this function.
 *  because it's too hard to undarstand that "flatMap" operation for `T | null`
 */
export function andThenForNullable<T, U>(src: Nullable<T>, fn: (this: void, v: T) => Nullable<U>): Nullable<U> {
    if (isNotNull(src)) {
        const r = fn(src);
        return r;
    }
    else {
        return src;
    }
}
