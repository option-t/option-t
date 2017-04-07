import { Nullable, isNotNull } from './Nullable';

export function orElseForNullable<T>(a: Nullable<T>, b: (this: void) => Nullable<T>): Nullable<T> {
    if (isNotNull(a)) {
        return a;
    }
    else {
        const r = b();
        return r;
    }
}
