import { expectNotNull } from './expect';
import { Nullable } from './Nullable';
import { ERR_MSG_UNWRAP_NO_VAL_FOR_NULLABLE } from './ErrorMessage';

/**
 *  Return _v_ as `T` if the passed _v_ is not `null`.
 *  Otherwise, throw `TypeError`.
 */
export function unwrapNullable<T>(v: Nullable<T>): T | never {
    return expectNotNull(v, ERR_MSG_UNWRAP_NO_VAL_FOR_NULLABLE);
}
