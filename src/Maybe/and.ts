import { isNotNullAndUndefined, Maybe } from './Maybe';

export function andForMaybe<T, U>(a: Maybe<T>, b: Maybe<U>): Maybe<U> {
    return isNotNullAndUndefined(a) ? b : a;
}
