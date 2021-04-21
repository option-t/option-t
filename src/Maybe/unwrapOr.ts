import { Maybe } from './Maybe';
import { expectNotNullAndUndefined } from './expect';
import { ERR_MSG_DEFAULT_VALUE_MUST_NOT_BE_NO_VAL_FOR_MAYBE } from './ErrorMessage';

/**
 *  Return _input_ as `T` if the passed _input_ is not `null` and `undefined`.
 *  Otherwise, return _defaultValue_.
 *
 *  * _defaultValue_ must not be `Maybe<*>`.
 *  * If the _defaultValue_ is `null` or `undefined`, throw `TypeError`.
 */
export function unwrapOrFromMaybe<T>(input: Maybe<T>, defaultValue: T): T {
    if (input !== undefined && input !== null) {
        return input;
    } else {
        return expectNotNullAndUndefined(
            defaultValue,
            ERR_MSG_DEFAULT_VALUE_MUST_NOT_BE_NO_VAL_FOR_MAYBE
        );
    }
}
