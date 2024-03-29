import type { Nullable } from '../nullable/nullable.js';
import { isUndefined, type Undefinable } from './undefinable.js';

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
