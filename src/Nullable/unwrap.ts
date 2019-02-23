import { expectNotNull } from './expect';
import { Nullable, NotNull } from './Nullable';
import { ERR_MSG_UNWRAP_NO_VAL_FOR_NULLABLE } from './ErrorMessage';

/**
 *  Return _v_ as `T` if the passed _v_ is not `null`.
 *  Otherwise, throw `TypeError`.
 */
export function unwrapNullable<T>(v: Nullable<T>): NotNull<T> {
    return expectNotNull(v, ERR_MSG_UNWRAP_NO_VAL_FOR_NULLABLE);
}
