import { Undefinable, isNotUndefined } from './Undefinable';

export function orUndefinable<T>(a: Undefinable<T>, b: Undefinable<T>): Undefinable<T> {
    return isNotUndefined(a) ? a : b;
}
