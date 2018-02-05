import { MapFn } from '../shared/Function';
import { Result, Err, createOk } from './Result';

export function mapForResult<T, U, E>(src: Result<T, E>, selector: MapFn<T, U>): Result<U, E> {
    if (src.ok) {
        const r: U = selector(src.val);
        return createOk(r);
    }
    else {
        const s: Err<E> = src;
        return s;
    }
}
