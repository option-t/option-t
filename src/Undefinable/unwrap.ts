import { expectNotUndefined } from './expect.ts';
import { Undefinable } from './Undefinable.ts';
import { ERR_MSG_UNWRAP_NO_VAL_FOR_UNDEFINABLE } from './ErrorMessage.ts';

/**
 *  Return _v_ as `T` if the passed _v_ is not `undefined`.
 *  Otherwise, throw `TypeError`.
 */
export function unwrapUndefinable<T>(v: Undefinable<T>): T | never {
    return expectNotUndefined(v, ERR_MSG_UNWRAP_NO_VAL_FOR_UNDEFINABLE);
}
