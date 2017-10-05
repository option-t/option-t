import { DoFn } from './Function';
import { isOk, Result } from './Result';

export function doOnOk<T, E>(v: Result<T, E>, fn: DoFn<T>): void {
    if (!isOk(v)) {
        return;
    }

    fn(v.val);
}

export function doOnErr<T, E>(v: Result<T, E>, fn: DoFn<E>): void {
    if (isOk(v)) {
        return;
    }

    fn(v.err);
}
