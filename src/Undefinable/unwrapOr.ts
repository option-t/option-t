import { Undefinable } from './Undefinable';
import { expectNotUndefined } from './expect';
import { ERR_MSG_DEFAULT_VALUE_MUST_NOT_BE_NO_VAL_FOR_UNDEFINABLE } from './ErrorMessage';

/**
 *  Return _input_ as `T` if the passed _input_ is not `undefined`.
 *  Otherwise, return _defaultValue_.
 *
 *  * _defaultValue_ must not be `Undefinable<*>`.
 *  * If the result of _defaultValue_ is `undefined`, throw `TypeError`.
 */
export function unwrapOrFromUndefinable<T>(input: Undefinable<T>, defaultValue: T): T {
    if (input !== undefined) {
        return input;
    }

    const passed: T = expectNotUndefined(
        defaultValue,
        ERR_MSG_DEFAULT_VALUE_MUST_NOT_BE_NO_VAL_FOR_UNDEFINABLE
    );
    return passed;
}
