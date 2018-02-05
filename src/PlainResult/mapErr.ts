import { MapFn } from '../shared/Function';
import { Result, createErr } from './Result';

export function mapErrForResult<T, E, F>(src: Result<T, E>, selector: MapFn<E, F>): Result<T, F> {
    if (!src.ok) {
        const r: F = selector(src.err);
        return createErr<F>(r);
    }
    else {
        return src;
    }
}
