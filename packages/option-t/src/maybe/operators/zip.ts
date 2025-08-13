import { type Maybe, type NotNullOrUndefined, isNotNullOrUndefined } from '../core/maybe.js';

/**
 *  Zips _self_ with another `Maybe<T>`.
 *  If _self_ is `T` and _other_ is `U`, this method returns `[NotNullOrUndefined<T>, NotNullOrUndefined<U>]`.
 *  Otherwise, `undefined` is returned.
 */
export function zipForMaybe<T, U>(
    self: Maybe<T>,
    other: Maybe<U>,
): Maybe<[NotNullOrUndefined<T>, NotNullOrUndefined<U>]> {
    if (isNotNullOrUndefined(self) && isNotNullOrUndefined(other)) {
        return [self, other];
    }

    return undefined;
}
