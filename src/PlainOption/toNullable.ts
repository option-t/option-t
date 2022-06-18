import type { Nullable } from '../Nullable/Nullable';
import { type Option } from './Option';
import { mapOrForOption } from './mapOr';

export function toNullableFromOption<T>(input: Option<T>): Nullable<T> {
    const rv = mapOrForOption<T, Nullable<T>>(input, null, (inner: T) => {
        return inner;
    });
    return rv;
}
