import { Maybe } from './Maybe';

export function orElseForMaybe<T>(a: Maybe<T>, b: (this: void) => Maybe<T>): Maybe<T> {
    if (a !== undefined && a !== null) {
        return a;
    }
    else {
        const r = b();
        return r;
    }
}
