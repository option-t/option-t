import { Nullable, NotNull, isNotNull } from './Nullable';
import { expectNotNull } from './expect';
import { ERR_MSG_DEF_MUST_NOT_BE_NO_VAL_FOR_NULLABLE } from './ErrorMessage';

/**
 *  Return _v_ as `T` if the passed _v_ is not `null`.
 *  Otherwise, return _def_.
 *
 *  * _def_ must not be `Nullable<*>`.
 *  * If the _def_ is `null`, throw `TypeError`.
 */
export function unwrapOrFromNullable<T>(v: Nullable<T>, def: NotNull<T>): NotNull<T> {
    if (isNotNull(v)) {
        return v;
    }
    else {
        return expectNotNull(def, ERR_MSG_DEF_MUST_NOT_BE_NO_VAL_FOR_NULLABLE);
    }
}
