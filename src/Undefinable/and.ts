import { Undefinable } from './Undefinable';

/**
 *  Return _b_ if _a_ is not `undefined`.
 *  Otherwise, return _a_.
 */
export function andForUndefinable<T, U>(a: Undefinable<T>, b: Undefinable<U>): Undefinable<U> {
    return (a !== undefined) ? b : a;
}
