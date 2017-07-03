import { Maybe, isNotNullAndUndefined } from './Maybe';

export function orElseForMaybe<T>(a: Maybe<T>, b: (this: void) => Maybe<T>): Maybe<T> {
    if (isNotNullAndUndefined(a)) {
        return a;
    }
    else {
        const r = b();
        return r;
    }
}
