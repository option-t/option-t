import { Undefinable, isNotUndefined } from './Undefinable';

export function orElseForUndefinable<T>(a: Undefinable<T>, b: (this: void) => Undefinable<T>): Undefinable<T> {
    if (isNotUndefined(a)) {
        return a;
    }
    else {
        const r = b();
        return r;
    }
}
