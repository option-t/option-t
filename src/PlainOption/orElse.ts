import { Option, isSome } from './Option';

export function orElseForOption<T>(a: Option<T>, b: (this: void) => Option<T>): Option<T> {
    if (isSome(a)) {
        return a;
    }
    else {
        const r = b();
        return r;
    }
}
