import { Option } from './Option';

export function orElseForOption<T>(a: Option<T>, b: (this: void) => Option<T>): Option<T> {
    if (a.ok) {
        return a;
    }
    else {
        const r = b();
        return r;
    }
}
