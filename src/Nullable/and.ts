import { Nullable, isNotNull } from './Nullable.ts';

/**
 *  Return _b_ if _a_ is not `null`.
 *  Otherwise, return _a_.
 */
export function andForNullable<T, U>(a: Nullable<T>, b: Nullable<U>): Nullable<U> {
    return isNotNull(a) ? b : a;
}
