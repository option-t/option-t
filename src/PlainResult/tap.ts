import { TapFn } from '../shared/Function';
import { Result } from './Result';

function noop<T>(_v: T) {}

export function tapOk<T, E>(v: Result<T, E>, fn: TapFn<T>): void {
    return tapBoth(v, fn, noop);
}

export function tapErr<T, E>(v: Result<T, E>, fn: TapFn<E>): void {
    return tapBoth(v, noop, fn);
}

export function tapBoth<T, E>(src: Result<T, E>, okFn: TapFn<T>, errFn: TapFn<E>): void {
    if (src.ok) {
        okFn(src.val);
    }
    else {
        errFn(src.err);
    }
}
