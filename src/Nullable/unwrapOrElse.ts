import { RecoveryFn } from '../shared/Function';
import { Nullable } from './Nullable';
import { expectNotNull } from './expect';
import { ERR_MSG_DEF_MUST_NOT_RETURN_NO_VAL_FOR_NULLABLE } from './ErrorMessage';

/**
 *  Return _v_ as `T` if the passed _v_ is not `null`.
 *  Otherwise, return the result of _def_.
 *
 *  * The result of _def_ must not be `Nullable<*>`.
 *      * If you try to recover the value, use `orElse()`
 *  * If the result of _def_ is `null`, throw `TypeError`.
 */
export function unwrapOrElseFromNullable<T>(v: Nullable<T>, def: RecoveryFn<T>): T {
    if (v !== null) {
        return v;
    } else {
        const r = def();
        return expectNotNull(r, ERR_MSG_DEF_MUST_NOT_RETURN_NO_VAL_FOR_NULLABLE);
    }
}
