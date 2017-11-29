import { MapFn } from '../utils/Function';
import { Option } from './Option';

export type FlatmapFn<T, U> = MapFn<T, Option<U>>;

/**
 *  XXX:
 *  Some languages call this operation flatmap.
 */
export function andThenForOption<T, U>(src: Option<T>, fn: FlatmapFn<T, U>): Option<U> {
    if (src.ok) {
        const r = fn(src.val);
        return r;
    }
    else {
        return src;
    }
}
