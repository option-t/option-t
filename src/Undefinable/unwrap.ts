import { expectNotUndefined } from './expect';
import { NotUndefined, Undefinable } from './Undefinable';
import { ERR_MSG_UNWRAP_NO_VAL_FOR_UNDEFINABLE } from './ErrorMessage';

/**
 *  Return _input_ as `T` if the passed _input_ is not `undefined`.
 *  Otherwise, throw `TypeError`.
 */
export function unwrapUndefinable<T>(input: Undefinable<T>): NotUndefined<T> {
    return expectNotUndefined(input, ERR_MSG_UNWRAP_NO_VAL_FOR_UNDEFINABLE);
}
