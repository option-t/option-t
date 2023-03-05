import type { Undefinable } from '../Undefinable/undefinable_.js';
import type { Option } from './option_.js';
import { mapOrForOption } from './map_or.js';

/**
 *  Return `T` if _input_ is `Some(T)`.
 *  Otherwise, return `undefined`.
 */
export function toUndefinableFromOption<T>(input: Option<T>): Undefinable<T> {
    const rv = mapOrForOption<T, Undefinable<T>>(input, undefined, (inner) => {
        return inner;
    });
    return rv;
}
