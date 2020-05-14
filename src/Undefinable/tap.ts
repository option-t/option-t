import { TapFn } from '../shared/Function.ts';
import { Undefinable } from './Undefinable.ts';

/**
 *  * Return _v_ directly.
 *      * This value is passed as the input. But it maybe mutated by calling _fn_.
 *  * Call _fn_ with _v_ if _v_ is not `undefined`.
 *
 *  * This was added to sort with others or future enhancement to accept chaining functions.
 *    We recommend to use simple `if` statement or similar way and they would be more efficient.
 */
export function tapUndefinable<T>(v: Undefinable<T>, fn: TapFn<T>): Undefinable<T> {
    if (v !== undefined) {
        fn(v);
    }
    return v;
}
