import type { Undefinable } from '../../undefinable/undefinable.js';
import { type Nullable, isNull } from '../core/nullable.js';

/**
 *  Return `undefined` if _input_ is `null`.
 *  Otherwise, return `T` directly.
 */
export function toUndefinableFromNullable<T>(input: Nullable<T>): Undefinable<T> {
    if (isNull(input)) {
        return undefined;
    }

    return input;
}
