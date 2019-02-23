import { RecoveryFn } from '../shared/Function';
import { Maybe, NotNullAndUndefined, isNotNullAndUndefined } from './Maybe';
import { expectNotNullAndUndefined } from './expect';
import { ERR_MSG_DEF_MUST_NOT_RETURN_NO_VAL_FOR_MAYBE } from './ErrorMessage';

/**
 *  Return _v_ as `T` if the passed _v_ is not `null` and `undefined`.
 *  Otherwise, return the result of _def_.
 *
 *  * The result of _def_ must not be `Maybe<*>`.
 *  * If the result of _def_ is `null` or `undefined`, throw `TypeError`.
 */
export function unwrapOrElseFromMaybe<T>(v: Maybe<T>, def: RecoveryFn<T>): NotNullAndUndefined<T> {
    if (isNotNullAndUndefined(v)) {
        return v;
    }
    else {
        const r = def();
        return expectNotNullAndUndefined(r, ERR_MSG_DEF_MUST_NOT_RETURN_NO_VAL_FOR_MAYBE);
    }
}
