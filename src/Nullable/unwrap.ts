import { expectNotNull } from './expect';
import { Nullable } from './Nullable';
import { ERR_MSG_UNWRAP_NO_VAL_FOR_NULLABLE } from './ErrorMessage';

/**
 *  Return _input_ as `T` if the passed _input_ is not `null`.
 *  Otherwise, throw `TypeError`.
 */
export function unwrapNullable<T>(input: Nullable<T>): T | never {
    return expectNotNull(input, ERR_MSG_UNWRAP_NO_VAL_FOR_NULLABLE);
}
