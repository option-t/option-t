import { DoFn } from './Function';
import { isNull, Nullable } from './Nullable';

export function doOnNullable<T>(v: Nullable<T>, fn: DoFn<T>): void {
    if (isNull(v)) {
        return;
    }

    fn(v);
}