import { Undefinable } from './Undefinable';

/**
 *  Return `T` if the passed _v_ is not `undefined`.
 *  Otherwise, throw `TypeError` with the passed `msg`.
 *
 *  @param v
 *  @param msg
 */
export function expectNotUndefined<T>(v: Undefinable<T>, msg: string): T | never {
    if (v === undefined) {
        throw TypeError(msg);
    }
    return v;
}
