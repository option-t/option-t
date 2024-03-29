import type { ZipTransformerFn } from '../internal/function.js';
import { ERR_MSG_TRANSFORMER_MUST_NOT_RETURN_NO_VAL_FOR_UNDEFINABLE } from './internal/error_message.js';
import {
    type Undefinable,
    type NotUndefined,
    expectNotUndefined,
    isUndefined,
} from './undefinable.js';

/**
 *  Zips _self_ and another `Undefinable` with function _transformer_.
 *  If _self_ is `T` and _other_ is `U`, this method returns the result of _transformer_.
 *  Otherwise, `undefined` is returned.
 *
 *  @throws {TypeError}
 *      Throws if the _transformer_ returns `undefined`.
 */
export function zipWithForUndefinable<T, U, R>(
    self: Undefinable<T>,
    other: Undefinable<U>,
    transformer: ZipTransformerFn<T, U, NotUndefined<R>>,
): Undefinable<R> {
    if (isUndefined(self) || isUndefined(other)) {
        return undefined;
    }

    const result: R = transformer(self, other);
    const checked: NotUndefined<R> = expectNotUndefined(
        result,
        ERR_MSG_TRANSFORMER_MUST_NOT_RETURN_NO_VAL_FOR_UNDEFINABLE,
    );
    return checked;
}
