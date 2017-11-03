import { Undefinable } from './Undefinable';

export function orElseForUndefinable<T>(a: Undefinable<T>, b: (this: void) => Undefinable<T>): Undefinable<T> {
    if (a !== undefined) {
        return a;
    }
    else {
        const r = b();
        return r;
    }
}
