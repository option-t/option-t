import { Undefinable } from './Undefinable';

export function andForUndefinable<T, U>(a: Undefinable<T>, b: Undefinable<U>): Undefinable<U> {
    return (a !== undefined) ? b : a;
}
