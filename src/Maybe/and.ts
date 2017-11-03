import { Maybe } from './Maybe';

export function andForMaybe<T, U>(a: Maybe<T>, b: Maybe<U>): Maybe<U> {
    return (a !== undefined && a !== null) ? b : a;
}
