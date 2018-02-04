import { expectNotNullAndUndefined } from './expect';
import { Maybe } from './Maybe';
import { ERR_MSG_UNWRAP_NO_VAL_FOR_MAYBE } from './ErrorMessage';

/**
 *  Return _v_ as `T` if the passed _v_ is not `null` and `undefined`.
 *  Otherwise, throw `TypeError`.
 */
export function unwrapMaybe<T>(v: Maybe<T>): T | never {
    return expectNotNullAndUndefined(v, ERR_MSG_UNWRAP_NO_VAL_FOR_MAYBE);
}
