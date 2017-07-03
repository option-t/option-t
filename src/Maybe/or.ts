import { Maybe, isNotNullAndUndefined } from './Maybe';

export function orMaybe<T>(a: Maybe<T>, b: Maybe<T>): Maybe<T> {
    return isNotNullAndUndefined(a) ? a : b;
}
