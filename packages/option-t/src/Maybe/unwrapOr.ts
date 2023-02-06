import { isNotNullAndUndefined, Maybe, NotNullAndUndefined } from './Maybe.js';
import { expectNotNullAndUndefined } from './expect.js';
import { ERR_MSG_DEFAULT_VALUE_MUST_NOT_BE_NO_VAL_FOR_MAYBE } from './ErrorMessage.js';

/**
 *  Return _input_ as `T` if the passed _input_ is not `null` and `undefined`.
 *  Otherwise, return _defaultValue_.
 *
 *  * _defaultValue_ must not be `Maybe<*>`.
 *  * If the _defaultValue_ is `null` or `undefined`, throw `TypeError`.
 */
export function unwrapOrFromMaybe<T>(
    input: Maybe<T>,
    defaultValue: NotNullAndUndefined<T>
): NotNullAndUndefined<T> {
    if (isNotNullAndUndefined(input)) {
        return input;
    }

    const passed = expectNotNullAndUndefined(
        defaultValue,
        ERR_MSG_DEFAULT_VALUE_MUST_NOT_BE_NO_VAL_FOR_MAYBE
    );
    return passed;
}
