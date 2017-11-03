import { Undefinable, isNotUndefined } from './Undefinable';

export function andForUndefinable<T, U>(a: Undefinable<T>, b: Undefinable<U>): Undefinable<U> {
    return isNotUndefined(a) ? b : a;
}
