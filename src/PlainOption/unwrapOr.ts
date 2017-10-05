import { Option, isSome } from './Option';

export function unwrapOrFromOption<T>(v: Option<T>, def: T): T {
    return isSome(v) ? v.val : def;
}
