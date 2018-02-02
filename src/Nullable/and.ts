import { Nullable } from './Nullable';

/**
 *  Return _b_ if _a_ is not `null`.
 *  Otherwise, return _a_.
 */
export function andForNullable<T, U>(a: Nullable<T>, b: Nullable<U>): Nullable<U> {
    return (a !== null) ? b : a;
}
