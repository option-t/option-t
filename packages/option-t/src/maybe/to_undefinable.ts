import type { NotUndefined, Undefinable } from '../undefinable/undefinable.js';
import { type Maybe, isNullOrUndefined } from './maybe.js';

/**
 *  Return `undfined` if _input_ is `null` or `undfined`.
 *  Otherwise, return `T` directly.
 */
export function toUndefinableFromMaybe<T>(input: Maybe<NotUndefined<T>>): Undefinable<T> {
    if (isNullOrUndefined(input)) {
        return undefined;
    }

    return input;
}
