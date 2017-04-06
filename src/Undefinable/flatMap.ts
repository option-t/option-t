import { Undefinable, isNotUndefined } from './Undefinable';
import { FlatMapFn } from './Function';

export function flatMapForUndefinable<T, U>(src: Undefinable<T>, selector: FlatMapFn<T, U>): Undefinable<U> {
    if (isNotUndefined(src)) {
        const r = selector(src);
        return r;
    }
    else {
        return src;
    }
}
