import { Maybe, isNotNullAndUndefined, isNullOrUndefined } from './Maybe.js';

/**
 *  Return _b_ if _a_ is not `null` and `undefined`.
 *  Otherwise, return _a_.
 */
export function andForMaybe<T, U>(a: Maybe<T>, b: Maybe<U>): Maybe<U> {
    if (isNullOrUndefined(a)) {
        return a;
    }

    if (isNotNullAndUndefined(a)) {
        return b;
    }

    throw new EvalError('here should be unreachable');
}
