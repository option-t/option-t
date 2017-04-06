import { Undefinable, isNotUndefined } from './Undefinable';

export function andUndefinable<T, U>(a: Undefinable<T>, b: Undefinable<U>): Undefinable<U> {
    return isNotUndefined(a) ? b : a;
}
