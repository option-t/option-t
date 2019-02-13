import { Maybe } from './Maybe';

/**
 *  Return _v_ as `T` if the passed _v_ is not `null` and `undefined`.
 *  Otherwise, throw `TypeError` with the passed `msg`.
 */
export function expectNotNullAndUndefined<T>(v: Maybe<T>, msg: string): T | never {
    if (v === undefined || v === null) {
        throw new TypeError(msg);
    }

    return v;
}
