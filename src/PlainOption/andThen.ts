import { Option } from './Option';

/**
 *  XXX:
 *  Some languages call this operation flatmap.
 */
export function andThenForOption<T, U>(src: Option<T>, fn: (this: void, v: T) => Option<U>): Option<U> {
    if (src.ok) {
        const r = fn(src.val);
        return r;
    }
    else {
        return src;
    }
}
