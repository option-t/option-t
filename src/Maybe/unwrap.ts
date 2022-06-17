import { expectNotNullAndUndefined } from './expect';
import { Maybe, NotNullAndUndefined } from './Maybe';
import { ERR_MSG_UNWRAP_NO_VAL_FOR_MAYBE } from './ErrorMessage';

/**
 *  Return _value_ as `T` if the passed _value_ is not `null` and `undefined`.
 *  Otherwise, throw `TypeError`.
 */
export function unwrapMaybe<T>(value: Maybe<T>): NotNullAndUndefined<T> {
    return expectNotNullAndUndefined(value, ERR_MSG_UNWRAP_NO_VAL_FOR_MAYBE);
}
