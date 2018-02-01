import { expectNotNull } from './expect';
import { Nullable } from './Nullable';

/**
 *  Return _v_ as `T` if the passed _v_ is not `null`.
 *  Otherwise, throw `TypeError`.
 */
export function unwrapNullable<T>(v: Nullable<T>): T | never {
    return expectNotNull(v, 'called with `null`');
}
