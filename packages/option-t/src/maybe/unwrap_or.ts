import { ERR_MSG_DEFAULT_VALUE_MUST_NOT_BE_NO_VAL_FOR_MAYBE } from './internal/error_message.js';
import {
    isNotNullOrUndefined,
    type Maybe,
    type NotNullOrUndefined,
    expectNotNullOrUndefined,
} from './maybe.js';

/**
 *  Return _input_ as `T` if the passed _input_ is not `null` and `undefined`.
 *  Otherwise, return _defaultValue_.
 *
 *  * _defaultValue_ must not be `Maybe<*>`.
 *  * If the _defaultValue_ is `null` or `undefined`, throw `TypeError`.
 */
export function unwrapOrForMaybe<T>(
    input: Maybe<T>,
    defaultValue: NotNullOrUndefined<T>,
): NotNullOrUndefined<T> {
    if (isNotNullOrUndefined(input)) {
        return input;
    }

    const passed = expectNotNullOrUndefined(
        defaultValue,
        ERR_MSG_DEFAULT_VALUE_MUST_NOT_BE_NO_VAL_FOR_MAYBE,
    );
    return passed;
}

/**
 *  @deprecated 40.6.0
 *
 *  This is kept for backward compatibility.
 *  Use {@link unwrapOrForMaybe} instead.
 */
export const unwrapOrFromMaybe: typeof unwrapOrForMaybe = unwrapOrForMaybe;
