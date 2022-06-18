import type { Nullable } from '../Nullable';
import { isUndefined, type Undefinable } from './Undefinable';

export function toNullableFromUndefinable<T>(input: Undefinable<T>): Nullable<T> {
    if (isUndefined(input)) {
        return null;
    }

    return input;
}
