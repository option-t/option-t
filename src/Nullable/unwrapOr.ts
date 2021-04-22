import { Nullable } from './Nullable';
import { expectNotNull } from './expect';
import { ERR_MSG_DEFAULT_VALUE_MUST_NOT_BE_NO_VAL_FOR_NULLABLE } from './ErrorMessage';

/**
 *  Return _input_ as `T` if the passed _input_ is not `null`.
 *  Otherwise, return _defaultValue_.
 *
 *  * _defaultValue_ must not be `Nullable<*>`.
 *  * If the _defaultValue_ is `null`, throw `TypeError`.
 */
export function unwrapOrFromNullable<T>(input: Nullable<T>, defaultValue: T): T {
    if (input !== null) {
        return input;
    } else {
        return expectNotNull(defaultValue, ERR_MSG_DEFAULT_VALUE_MUST_NOT_BE_NO_VAL_FOR_NULLABLE);
    }
}
