import type { Undefinable } from '../../undefinable/core/undefinable.js';
import { mapOrForOption } from './map_or.js';
import type { Option } from './option.js';

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
