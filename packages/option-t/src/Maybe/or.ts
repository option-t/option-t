import type { Maybe } from './maybe_.js';

/**
 *  Return _a_ if _a_ is not `null` and `undefined`.
 *  Otherwise, return _b_.
 */
export function orForMaybe<T>(a: Maybe<T>, b: Maybe<T>): Maybe<T> {
    if (a !== undefined && a !== null) {
        return a;
    }

    return b;
}
