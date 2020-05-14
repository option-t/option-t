import { RecoveryFn } from '../shared/Function.ts';
import { Undefinable } from './Undefinable.ts';
import { expectNotUndefined } from './expect.ts';
import { ERR_MSG_DEF_MUST_NOT_RETURN_NO_VAL_FOR_UNDEFINABLE } from './ErrorMessage.ts';

/**
 *  Return _v_ as `T` if the passed _v_ is not `undefined`.
 *  Otherwise, return the result of _def_.
 *
 *  * The result of _def_ must not be `Undefinable<*>`.
 *      * If you try to recover the value, use `orElse()`
 *  * If the result of _def_ is `undefined`, throw `TypeError`.
 */
export function unwrapOrElseFromUndefinable<T>(v: Undefinable<T>, def: RecoveryFn<T>): T {
    if (v !== undefined) {
        return v;
    }
    else {
        const r = def();
        return expectNotUndefined(r, ERR_MSG_DEF_MUST_NOT_RETURN_NO_VAL_FOR_UNDEFINABLE);
    }
}
