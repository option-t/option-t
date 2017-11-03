import { Undefinable } from './Undefinable';

export function orForUndefinable<T>(a: Undefinable<T>, b: Undefinable<T>): Undefinable<T> {
    return (a !== undefined) ? a : b;
}
