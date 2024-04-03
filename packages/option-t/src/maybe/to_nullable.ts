import type { NotNull, Nullable } from '../nullable/nullable.js';
import { type Maybe, isNullOrUndefined } from './maybe.js';

/**
 *  Return `null` if _input_ is `null` or `undfined`.
 *  Otherwise, return `T` directly.
 */
export function toNullableFromMaybe<T>(input: Maybe<NotNull<T>>): Nullable<T> {
    if (isNullOrUndefined(input)) {
        return null;
    }

    return input;
}
