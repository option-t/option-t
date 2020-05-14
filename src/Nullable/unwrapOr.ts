import { Nullable } from './Nullable.ts';
import { expectNotNull } from './expect.ts';
import { ERR_MSG_DEF_MUST_NOT_BE_NO_VAL_FOR_NULLABLE } from './ErrorMessage.ts';

/**
 *  Return _v_ as `T` if the passed _v_ is not `null`.
 *  Otherwise, return _def_.
 *
 *  * _def_ must not be `Nullable<*>`.
 *  * If the _def_ is `null`, throw `TypeError`.
 */
export function unwrapOrFromNullable<T>(v: Nullable<T>, def: T): T {
    if (v !== null) {
        return v;
    }
    else {
        return expectNotNull(def, ERR_MSG_DEF_MUST_NOT_BE_NO_VAL_FOR_NULLABLE);
    }
}
