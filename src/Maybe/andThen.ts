import { MapFn } from '../shared/Function.ts';
import { Maybe, isNotNullAndUndefined } from './Maybe.ts';

export type FlatmapFn<T, U> = MapFn<T, Maybe<U>>;

/**
 *  Returns `null` or `undefined` if the _src_ is `null` or `undefined`,
 *  otherwise calls _selector_ with the value and returns the result.
 *
 *  XXX:
 *  Some languages call this operation flatmap.
 *  But we don't provide `flatMap()` as alias of this function.
 *  because it's too hard to undarstand that "flatMap" operation for `T | null | undefined`.
 */
export function andThenForMaybe<T, U>(src: Maybe<T>, selector: FlatmapFn<T, U>): Maybe<U> {
    if (isNotNullAndUndefined(src)) {
        const r = selector(src);
        return r;
    }
    else {
        return src;
    }
}
