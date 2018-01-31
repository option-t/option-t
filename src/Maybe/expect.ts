import { Maybe } from './Maybe';

/**
 *  Return `T` if the passed _v_ is not `null` and `undefined`.
 *  Otherwise, throw `TypeError` with the passed `msg`.
 *
 *  @param v
 *  @param msg
 */
export function expectNotNullAndUndefined<T>(v: Maybe<T>, msg: string): T | never {
    if (v === undefined || v === null) {
        throw TypeError(msg);
    }

    return v;
}
