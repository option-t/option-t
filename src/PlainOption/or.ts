import { Option, isSome } from './Option';

export function orForOption<T>(a: Option<T>, b: Option<T>): Option<T> {
    return isSome(a) ? a : b;
}
