import { MapFn } from '../utils/Function';
import { Maybe } from './Maybe';

export type FlatmapFn<T, U> = MapFn<T, Maybe<U>>;

/**
 *  Returns `null` or `undefined` if the `src` is `null` or `undefined`,
 *  otherwise calls `fn` with the value and returns the result.
 *
 *  XXX:
 *  Some languages call this operation flatmap.
 *  But we don't provide `flatMap()` as alias of this function.
 *  because it's too hard to undarstand that "flatMap" operation for `T | null | undefined`.
 */
export function andThenForMaybe<T, U>(src: Maybe<T>, fn: FlatmapFn<T, U>): Maybe<U> {
    if (src !== undefined && src !== null) {
        const r = fn(src);
        return r;
    }
    else {
        return src;
    }
}
