import { MapFn } from '../shared/Function.ts';
import { Option } from './Option.ts';

export type FlatmapFn<T, U> = MapFn<T, Option<U>>;

/**
 *  Returns `None` if the _src_ is `None`,
 *  otherwise calls _selector_ with the value and returns the result.
 *
 *  XXX:
 *  Some languages call this operation flatmap.
 *  But we don't provide `flatMap()` as alias of this function
 *  to sort with other APIs.
 */
export function andThenForOption<T, U>(src: Option<T>, selector: FlatmapFn<T, U>): Option<U> {
    if (src.ok) {
        const r = selector(src.val);
        return r;
    }
    else {
        return src;
    }
}
