import type { Nullable } from '../../nullable/core/nullable.js';
import { mapOrForOption } from './map_or.js';
import type { Option } from './option.js';

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
