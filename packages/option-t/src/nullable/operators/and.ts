import { type Nullable, isNotNull } from '../core/nullable.js';

/**
 *  Return _b_ if _a_ is not `null`.
 *  Otherwise, return _a_.
 */
export function andForNullable<T, U>(a: Nullable<T>, b: Nullable<U>): Nullable<U> {
    if (isNotNull(a)) {
        return b;
    }

    return null;
}
