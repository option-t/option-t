import { DoFn } from '../utils/Function';
import { Result } from './Result';

function noop<T>(_v: T) {}

export function doOnOk<T, E>(v: Result<T, E>, fn: DoFn<T>): void {
    return doOnBoth(v, fn, noop);
}

export function doOnErr<T, E>(v: Result<T, E>, fn: DoFn<E>): void {
    return doOnBoth(v, noop, fn);
}

export function doOnBoth<T, E>(src: Result<T, E>, okFn: DoFn<T>, errFn: DoFn<E>): void {
    if (src.ok) {
        okFn(src.val);
    }
    else {
        errFn(src.err);
    }
}
