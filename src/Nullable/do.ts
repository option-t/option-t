import { DoFn } from '../utils/Function';
import { Nullable } from './Nullable';

export function doOnNullable<T>(v: Nullable<T>, fn: DoFn<T>): void {
    if (v === null) {
        return;
    }

    fn(v);
}
