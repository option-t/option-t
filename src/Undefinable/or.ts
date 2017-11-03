import { Undefinable, isNotUndefined } from './Undefinable';

export function orForUndefinable<T>(a: Undefinable<T>, b: Undefinable<T>): Undefinable<T> {
    return isNotUndefined(a) ? a : b;
}
