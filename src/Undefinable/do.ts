import { TapFn } from '../utils/Function';
import { Undefinable } from './Undefinable';

export function doOnUndefinable<T>(v: Undefinable<T>, fn: TapFn<T>): void {
    if (v === undefined) {
        return;
    }

    fn(v);
}
