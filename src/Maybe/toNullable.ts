import type { Nullable } from '../Nullable/Nullable';
import { type Maybe, isNullOrUndefined } from './Maybe';

/**
 *  Return `null` if _input_ is `null` or `undfined`.
 *  Otherwise, return `T` directly.
 */
export function toNullableFromMaybe<T>(input: Maybe<T>): Nullable<T> {
    if (isNullOrUndefined(input)) {
        return null;
    }

    return input;
}
