import type { Undefinable } from '../Undefinable/undefinable_.js';
import { type Maybe, isNullOrUndefined } from './maybe_.js';

/**
 *  Return `undfined` if _input_ is `null` or `undfined`.
 *  Otherwise, return `T` directly.
 */
export function toUndefinableFromMaybe<T>(input: Maybe<T>): Undefinable<T> {
    if (isNullOrUndefined(input)) {
        return undefined;
    }

    return input;
}
