import { expectNotUndefined } from './expect';
import { Undefinable } from './Undefinable';
import { ERR_MSG_UNWRAP_NO_VAL_FOR_UNDEFINABLE } from './ErrorMessage';

/**
 *  Return _input_ as `T` if the passed _input_ is not `undefined`.
 *  Otherwise, throw `TypeError`.
 */
export function unwrapUndefinable<T>(input: Undefinable<T>): T | never {
    return expectNotUndefined(input, ERR_MSG_UNWRAP_NO_VAL_FOR_UNDEFINABLE);
}
