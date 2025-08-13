import type { AsyncZipTransformerFn } from '../../internal/function.js';
import {
    isNullOrUndefined,
    type Maybe,
    type NotNullOrUndefined,
    expectNotNullOrUndefined,
} from '../core/maybe.js';
import { ERR_MSG_TRANSFORMER_MUST_NOT_RETURN_NO_VAL_FOR_MAYBE } from '../internal/error_message.js';

/**
 *  Zips _self_ and another `Maybe` with function _transformer_.
 *  If _self_ is `T` and _other_ is `U`, this method returns the result of _transformer_.
 *  Otherwise, `undefined` is returned.
 *
 *  @throws {TypeError}
 *      Throws if the _transformer_ returns `null` or `undefined`.
 */
export async function zipWithAsyncForMaybe<T, U, R>(
    self: Maybe<T>,
    other: Maybe<U>,
    transformer: AsyncZipTransformerFn<T, U, NotNullOrUndefined<R>>,
): Promise<Maybe<R>> {
    if (isNullOrUndefined(self) || isNullOrUndefined(other)) {
        return undefined;
    }

    const result: R = await transformer(self, other);
    const checked: NotNullOrUndefined<R> = expectNotNullOrUndefined(
        result,
        ERR_MSG_TRANSFORMER_MUST_NOT_RETURN_NO_VAL_FOR_MAYBE,
    );
    return checked;
}
