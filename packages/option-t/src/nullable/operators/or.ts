import type { Nullable } from '../core/nullable.js';

/**
 *  Return _a_ if _a_ is not `null`.
 *  Otherwise, return _b_.
 */
export function orForNullable<T>(a: Nullable<T>, b: Nullable<T>): Nullable<T> {
    if (a !== null) {
        return a;
    }

    return b;
}
