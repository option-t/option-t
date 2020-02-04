import { TapFn } from '../shared/Function';
import { Nullable } from './Nullable';

/**
 *  * Return _v_ directly.
 *      * This value is passed as the input. But it maybe mutated by calling _fn_.
 *  * Call _fn_ with _v_ if _v_ is not `null`.
 *
 *  * This was added to sort with others or future enhancement to accept chaining functions.
 *    We recommend to use simple `if` statement or similar way and they would be more efficient.
 */
export function tapNullable<T>(v: Nullable<T>, fn: TapFn<T>): Nullable<T> {
    if (v !== null) {
        fn(v);
    }

    return v;
}
