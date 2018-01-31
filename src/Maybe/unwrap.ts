import { expectNotNullAndUndefined } from './expect';
import { Maybe } from './Maybe';

/**
 *  Return `T` if the passed _v_ is not `null` and `undefined`.
 *  Otherwise, throw `TypeError`.
 */
export function unwrapMaybe<T>(v: Maybe<T>): T | never {
    return expectNotNullAndUndefined(v, 'called with `null` or `undefined`');
}
