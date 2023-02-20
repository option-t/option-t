import type { Nullable } from '../Nullable/Nullable.js';
import type { Option } from './Option.js';
import { mapOrForOption } from './mapOr.js';

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
