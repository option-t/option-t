import { Maybe, isNotNullAndUndefined } from './Maybe';

/**
 *  Return _b_ if _a_ is not `null` and `undefined`.
 *  Otherwise, return _a_.
 */
export function andForMaybe<T, U>(a: Maybe<T>, b: Maybe<U>): Maybe<U> {
    if (isNotNullAndUndefined(a)) {
        return b;
    }

    return a;
}
