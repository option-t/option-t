import { expectNotNull } from './expect.ts';
import { Nullable } from './Nullable.ts';
import { ERR_MSG_UNWRAP_NO_VAL_FOR_NULLABLE } from './ErrorMessage.ts';

/**
 *  Return _v_ as `T` if the passed _v_ is not `null`.
 *  Otherwise, throw `TypeError`.
 */
export function unwrapNullable<T>(v: Nullable<T>): T | never {
    return expectNotNull(v, ERR_MSG_UNWRAP_NO_VAL_FOR_NULLABLE);
}
