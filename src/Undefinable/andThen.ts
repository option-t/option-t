import { flatMapForUndefinable } from './flatMap';
import { FlatMapFn } from './Function';
import { Undefinable } from './Undefinable';

export function andThenForUndefinable<T, U>(src: Undefinable<T>, fn: FlatMapFn<T, U>): Undefinable<U> {
    return flatMapForUndefinable<T, U>(src, fn);
}
