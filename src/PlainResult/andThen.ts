import { FlatmapOkFn } from './Function';
import { Result } from './Result';

/**
 *  XXX:
 *  Some languages call this operation flatmap.
 */
export function andThenForResult<T, U, E>(src: Result<T, E>, fn: FlatmapOkFn<T, U, E>): Result<U, E> {
    if (src.ok) {
        const r = fn(src.val);
        return r;
    }
    else {
        return src;
    }
}
