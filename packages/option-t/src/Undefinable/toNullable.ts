import type { Nullable } from '../Nullable/Nullable.js';
import { isUndefined, type Undefinable } from './Undefinable.js';

/**
 *  Return `null` if _input_ is `undfined`.
 *  Otherwise, return `T` directly.
 */
export function toNullableFromUndefinable<T>(input: Undefinable<T>): Nullable<T> {
    if (isUndefined(input)) {
        return null;
    }

    return input;
}
