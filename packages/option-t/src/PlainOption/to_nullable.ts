import type { Nullable } from '../Nullable/nullable_.js';
import type { Option } from './option_.js';
import { mapOrForOption } from './map_or.js';

/**
 *  Return `T` if _input_ is `Some(T)`.
 *  Otherwise, return `null`.
 */
export function toNullableFromOption<T>(input: Option<T>): Nullable<T> {
    const rv = mapOrForOption<T, Nullable<T>>(input, null, (inner: T) => {
        return inner;
    });
    return rv;
}
