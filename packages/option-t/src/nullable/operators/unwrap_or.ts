import { type Nullable, type NotNull, isNotNull, expectNotNull } from '../core/nullable.js';
import { ERR_MSG_DEFAULT_VALUE_MUST_NOT_BE_NO_VAL_FOR_NULLABLE } from '../internal/error_message.js';

/**
 *  Return _input_ as `T` if the passed _input_ is not `null`.
 *  Otherwise, return _defaultValue_.
 *
 *  * _defaultValue_ must not be `Nullable<*>`.
 *  * If the _defaultValue_ is `null`, throw `TypeError`.
 */
export function unwrapOrForNullable<T>(input: Nullable<T>, defaultValue: NotNull<T>): NotNull<T> {
    if (isNotNull(input)) {
        return input;
    }

    const passed = expectNotNull(
        defaultValue,
        ERR_MSG_DEFAULT_VALUE_MUST_NOT_BE_NO_VAL_FOR_NULLABLE,
    );
    return passed;
}
