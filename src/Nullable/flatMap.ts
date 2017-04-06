import { Nullable, isNotNull } from './Nullable';
import { FlatMapFn } from './Function';

export function flatMapForNullable<T, U>(src: Nullable<T>, selector: FlatMapFn<T, U>): Nullable<U> {
    if (isNotNull(src)) {
        const r = selector(src);
        return r;
    }
    else {
        return src;
    }
}