import { isNotNull, type Nullable, type NotNull } from '../core/nullable.js';

/**
 *  Zips _self_ with another `Nullable<T>`.
 *  If _self_ is `T` and _other_ is `U`, this method returns `[NotNull<T>, NotNull<U>]`.
 *  Otherwise, `null` is returned.
 */
export function zipForNullable<T, U>(
    self: Nullable<T>,
    other: Nullable<U>,
): Nullable<[NotNull<T>, NotNull<U>]> {
    if (isNotNull(self) && isNotNull(other)) {
        return [self, other];
    }

    return null;
}
