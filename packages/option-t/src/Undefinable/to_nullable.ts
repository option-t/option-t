import type { Nullable } from '../Nullable/nullable_.js';
import { isUndefined, type Undefinable } from './undefinable_.js';

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
