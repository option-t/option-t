import { Undefinable, isNotUndefined } from './Undefinable';

/**
 *  Returns `undefined` if the `src` is `undefined`,
 *  otherwise calls `fn` with the value and returns the result.
 * 
 *  XXX:
 *  Some languages call this operation flatmap.
 *  But we don't provide `flatMap()` as alias of this function.
 *  because it's too hard to undarstand that "flatMap" operation for `T | undefined`
 */
export function andThenForUndefinable<T, U>(src: Undefinable<T>, fn: (this: void, v: T) => Undefinable<U>): Undefinable<U> {
    if (isNotUndefined(src)) {
        const r = fn(src);
        return r;
    }
    else {
        return src;
    }
}
