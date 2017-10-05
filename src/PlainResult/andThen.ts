import { FlatmapOkFn } from './Function';
import { Result, isOk } from './Result';

/**
 *  XXX:
 *  Some languages call this operation flatmap.
 */
export function andThenForResult<T, U, E>(src: Result<T, E>, fn: FlatmapOkFn<T, U, E>): Result<U, E> {
    if (isOk(src)) {
        const r = fn(src.val);
        return r;
    }
    else {
        return src;
    }
}
