import { Option, isSome } from './Option';

export function orOption<T>(a: Option<T>, b: Option<T>): Option<T> {
    return isSome(a) ? a : b;
}
