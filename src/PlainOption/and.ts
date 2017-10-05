import { Option, isSome } from './Option';

export function andForOption<T, U>(a: Option<T>, b: Option<U>): Option<U> {
    return isSome(a) ? b : a;
}
