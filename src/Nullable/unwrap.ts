import { expectNotNull } from './expect';
import { NotNull, Nullable } from './Nullable';
import { ERR_MSG_UNWRAP_NO_VAL_FOR_NULLABLE } from './ErrorMessage';

/**
 *  Return _input_ as `T` if the passed _input_ is not `null`.
 *  Otherwise, throw `TypeError`.
 */
export function unwrapNullable<T>(input: Nullable<T>): NotNull<T> {
    return expectNotNull(input, ERR_MSG_UNWRAP_NO_VAL_FOR_NULLABLE);
}
