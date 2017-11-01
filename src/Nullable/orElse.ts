import { Nullable } from './Nullable';

export function orElseForNullable<T>(a: Nullable<T>, b: (this: void) => Nullable<T>): Nullable<T> {
    if (a !== null) {
        return a;
    }
    else {
        const r = b();
        return r;
    }
}
