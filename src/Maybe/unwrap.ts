import { expectNotNullAndUndefined } from './expect.js';
import { Maybe, NotNullAndUndefined } from './Maybe.js';
import { ERR_MSG_UNWRAP_NO_VAL_FOR_MAYBE } from './ErrorMessage.js';

/**
 *  Return _value_ as `T` if the passed _value_ is not `null` and `undefined`.
 *  Otherwise, throw `TypeError`.
 */
export function unwrapMaybe<T>(value: Maybe<T>): NotNullAndUndefined<T> {
    return expectNotNullAndUndefined(value, ERR_MSG_UNWRAP_NO_VAL_FOR_MAYBE);
}
