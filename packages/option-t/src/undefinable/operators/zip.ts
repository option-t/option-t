import { type Undefinable, type NotUndefined, isNotUndefined } from '../core/undefinable.js';

/**
 *  Zips _self_ with another `Undefinable<T>`.
 *  If _self_ is `T` and _other_ is `U`, this method returns `[NotUndefined<T>, NotUndefined<U>]`.
 *  Otherwise, `undefined` is returned.
 */
export function zipForUndefinable<T, U>(
    self: Undefinable<T>,
    other: Undefinable<U>,
): Undefinable<[NotUndefined<T>, NotUndefined<U>]> {
    if (isNotUndefined(self) && isNotUndefined(other)) {
        return [self, other];
    }

    return undefined;
}
