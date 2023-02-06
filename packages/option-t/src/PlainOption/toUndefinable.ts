import type { Undefinable } from '../Undefinable/Undefinable.js';
import { type Option } from './Option.js';
import { mapOrForOption } from './mapOr.js';

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
