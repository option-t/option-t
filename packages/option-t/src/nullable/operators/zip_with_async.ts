import type { AsyncZipTransformerFn } from '../../internal/function.js';
import { isNull, type Nullable, type NotNull, expectNotNull } from '../core/nullable.js';
import { ERR_MSG_TRANSFORMER_MUST_NOT_RETURN_NO_VAL_FOR_NULLABLE } from '../internal/error_message.js';

/**
 *  Zips _self_ and another `Nullable` with function _transformer_.
 *  If _self_ is `T` and _other_ is `U`, this method returns the result of _transformer_.
 *  Otherwise, `null` is returned.
 *
 *  @throws {TypeError}
 *      Throws if the _transformer_ returns `null`.
 */
export async function zipWithAsyncForNullable<T, U, R>(
    self: Nullable<T>,
    other: Nullable<U>,
    transformer: AsyncZipTransformerFn<T, U, NotNull<R>>,
): Promise<Nullable<R>> {
    if (isNull(self) || isNull(other)) {
        return null;
    }

    const result: R = await transformer(self, other);
    const checked: NotNull<R> = expectNotNull(
        result,
        ERR_MSG_TRANSFORMER_MUST_NOT_RETURN_NO_VAL_FOR_NULLABLE,
    );
    return checked;
}
