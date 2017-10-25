import { MapFn } from '../utils/Function';
import { Result, isErr, createErr } from './Result';

export function mapErrForResult<T, E, F>(src: Result<T, E>, selector: MapFn<E, F>): Result<T, F> {
    if (isErr(src)) {
        const r: F = selector(src.err);
        return createErr<F>(r);
    }
    else {
        return src;
    }
}
