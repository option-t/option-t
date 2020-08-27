import { Maybe } from './Maybe';
import { expectNotNullAndUndefined } from './expect';
import { ERR_MSG_DEF_MUST_NOT_BE_NO_VAL_FOR_MAYBE } from './ErrorMessage';

/**
 *  Return _v_ as `T` if the passed _v_ is not `null` and `undefined`.
 *  Otherwise, return _def_.
 *
 *  * _def_ must not be `Maybe<*>`.
 *  * If the _def_ is `null` or `undefined`, throw `TypeError`.
 */
export function unwrapOrFromMaybe<T>(v: Maybe<T>, def: T): T {
    if (v !== undefined && v !== null) {
        return v;
    } else {
        return expectNotNullAndUndefined(def, ERR_MSG_DEF_MUST_NOT_BE_NO_VAL_FOR_MAYBE);
    }
}
