import type { NotNull, Nullable } from '../nullable/nullable.js';
import type { Option } from './option.js';
import { unwrapOrForOption } from './unwrap_or.js';

/**
 *  Return `T` if _input_ is `Some(T)`.
 *  Otherwise, return `null`.
 */
export function toNullableFromOption<T>(input: Option<NotNull<T>>): Nullable<T> {
    const rv = unwrapOrForOption<Nullable<T>>(input, null);
    return rv;
}
