import { Nullable } from './Nullable';

/**
 *  Return _a_ if _a_ is not `null`.
 *  Otherwise, return _b_.
 */
export function orForNullable<T>(a: Nullable<T>, b: Nullable<T>): Nullable<T> {
    return (a !== null) ? a : b;
}
