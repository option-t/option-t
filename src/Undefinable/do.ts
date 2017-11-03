import { DoFn } from '../utils/Function';
import { Undefinable } from './Undefinable';

export function doOnUndefinable<T>(v: Undefinable<T>, fn: DoFn<T>): void {
    if (v === undefined) {
        return;
    }

    fn(v);
}
