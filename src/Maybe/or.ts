import { Maybe } from './Maybe';

export function orForMaybe<T>(a: Maybe<T>, b: Maybe<T>): Maybe<T> {
    return (a !== undefined && a !== null) ? a : b;
}
