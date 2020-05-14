import { RecoveryFn } from '../shared/Function.ts';
import { Maybe } from './Maybe.ts';
import { expectNotNullAndUndefined } from './expect.ts';
import { ERR_MSG_DEF_MUST_NOT_RETURN_NO_VAL_FOR_MAYBE } from './ErrorMessage.ts';

/**
 *  Return _v_ as `T` if the passed _v_ is not `null` and `undefined`.
 *  Otherwise, return the result of _def_.
 *
 *  * The result of _def_ must not be `Maybe<*>`.
 *  * If the result of _def_ is `null` or `undefined`, throw `TypeError`.
 */
export function unwrapOrElseFromMaybe<T>(v: Maybe<T>, def: RecoveryFn<T>): T {
    if (v !== undefined && v !== null) {
        return v;
    }
    else {
        const r = def();
        return expectNotNullAndUndefined(r, ERR_MSG_DEF_MUST_NOT_RETURN_NO_VAL_FOR_MAYBE);
    }
}
