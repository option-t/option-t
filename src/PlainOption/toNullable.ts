import type { Nullable } from '../Nullable/Nullable';
import { type Option } from './Option';
import { mapOrForOption } from './mapOr';

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
