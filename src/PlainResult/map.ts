import { MapFn } from './Function';
import { Result, Err, isOk, createOk } from './Result';

export function mapForResult<T, U, E>(src: Result<T, E>, selector: MapFn<T, U>): Result<U, E> {
    if (isOk(src)) {
        const r: U = selector(src.val);
        return createOk(r);
    }
    else {
        const s: Err<E> = src;
        return s;
    }
}
