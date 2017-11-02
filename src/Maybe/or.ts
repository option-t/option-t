import { Maybe, isNotNullAndUndefined } from './Maybe';

export function orForMaybe<T>(a: Maybe<T>, b: Maybe<T>): Maybe<T> {
    return isNotNullAndUndefined(a) ? a : b;
}
