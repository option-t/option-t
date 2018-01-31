import { Nullable } from './Nullable';

/**
 *  Return `T` if the passed _v_ is not `null`.
 *  Otherwise, throw `TypeError` with the passed `msg`.
 *
 *  @param v
 *  @param msg
 */
export function expectNotNull<T>(v: Nullable<T>, msg: string): T | never {
    if (v === null) {
        throw TypeError(msg);
    }

    return v;
}
