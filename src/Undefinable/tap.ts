import { TapFn } from '../shared/Function';
import { Undefinable } from './Undefinable';

/**
 *  Call _fn_ with _v_ if _v_ is not `undefined`.
 */
export function tapUndefinable<T>(v: Undefinable<T>, fn: TapFn<T>): void {
    if (v === undefined) {
        return;
    }

    fn(v);
}
