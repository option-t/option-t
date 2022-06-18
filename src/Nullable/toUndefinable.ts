import type { Undefinable } from '../Undefinable/Undefinable';
import { type Nullable, isNull } from './Nullable';

export function toUndefinableFromNullable<T>(input: Nullable<T>): Undefinable<T> {
    if (isNull(input)) {
        return undefined;
    }

    return input;
}
