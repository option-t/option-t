import { expectNotUndefined } from './expect';
import { Undefinable, NotUndefined } from './Undefinable';
import { ERR_MSG_UNWRAP_NO_VAL_FOR_UNDEFINABLE } from './ErrorMessage';

/**
 *  Return _v_ as `T` if the passed _v_ is not `undefined`.
 *  Otherwise, throw `TypeError`.
 */
export function unwrapUndefinable<T>(v: Undefinable<T>): NotUndefined<T> {
    return expectNotUndefined(v, ERR_MSG_UNWRAP_NO_VAL_FOR_UNDEFINABLE);
}
