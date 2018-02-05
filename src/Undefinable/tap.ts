import { TapFn } from '../shared/Function';
import { Undefinable } from './Undefinable';

/**
 *  * Return _v_ directly.
 *      * This value is passed as the input. But it maybe mutated by calling _fn_.
 *  * Call _fn_ with _v_ if _v_ is not `undefined`.
 */
export function tapUndefinable<T>(v: Undefinable<T>, fn: TapFn<T>): Undefinable<T> {
    if (v !== undefined) {
        fn(v);
    }
    return v;
}
