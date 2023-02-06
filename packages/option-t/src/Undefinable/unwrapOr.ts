import { isNotUndefined, NotUndefined, Undefinable } from './Undefinable.js';
import { expectNotUndefined } from './expect.js';
import { ERR_MSG_DEFAULT_VALUE_MUST_NOT_BE_NO_VAL_FOR_UNDEFINABLE } from './ErrorMessage.js';

/**
 *  Return _input_ as `T` if the passed _input_ is not `undefined`.
 *  Otherwise, return _defaultValue_.
 *
 *  * _defaultValue_ must not be `Undefinable<*>`.
 *  * If the result of _defaultValue_ is `undefined`, throw `TypeError`.
 */
export function unwrapOrFromUndefinable<T>(
    input: Undefinable<T>,
    defaultValue: NotUndefined<T>
): NotUndefined<T> {
    if (isNotUndefined(input)) {
        return input;
    }

    const passed = expectNotUndefined(
        defaultValue,
        ERR_MSG_DEFAULT_VALUE_MUST_NOT_BE_NO_VAL_FOR_UNDEFINABLE
    );
    return passed;
}
