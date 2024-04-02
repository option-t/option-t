import type { NotUndefined, Undefinable } from '../undefinable/undefinable.js';
import type { Option } from './option.js';
import { unwrapOrForOption } from './unwrap_or.js';

/**
 *  Return `T` if _input_ is `Some(T)`.
 *  Otherwise, return `undefined`.
 */
export function toUndefinableFromOption<T>(input: Option<NotUndefined<T>>): Undefinable<T> {
    const rv = unwrapOrForOption<Undefinable<T>>(input, undefined);
    return rv;
}
