import { expectNotUndefined } from './expect';
import { Undefinable } from './Undefinable';

/**
 *  Return `T` if the passed _v_ is not `undefined`.
 *  Otherwise, throw `TypeError`.
 */
export function unwrapUndefinable<T>(v: Undefinable<T>): T | never {
    return expectNotUndefined(v, 'called with `undefined`');
}
