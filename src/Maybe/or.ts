import { Maybe } from './Maybe';

/**
 *  Return _a_ if _a_ is not `null` and `undefined`.
 *  Otherwise, return _b_.
 */
export function orForMaybe<T>(a: Maybe<T>, b: Maybe<T>): Maybe<T> {
    return (a !== undefined && a !== null) ? a : b;
}
