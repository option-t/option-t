import { DoFn } from './Function';
import { Undefinable, isUndefined } from './Undefinable';

export function doOnUndefinable<T>(v: Undefinable<T>, fn: DoFn<T>): void {
    if (isUndefined(v)) {
        return;
    }

    fn(v);
}
