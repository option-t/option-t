import { flatMapForNullable } from './flatMap';
import { FlatMapFn } from './Function';
import { Nullable } from './Nullable';

export function andThenForNullable<T, U>(src: Nullable<T>, fn: FlatMapFn<T, U>): Nullable<U> {
    return flatMapForNullable(src, fn);
}