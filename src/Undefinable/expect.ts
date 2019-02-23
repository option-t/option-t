import { Undefinable, NotUndefined, isNotUndefined } from './Undefinable';

/**
 *  Return _v_ as `T` if the passed _v_ is not `undefined`.
 *  Otherwise, throw `TypeError` with the passed `msg`.
 */
export function expectNotUndefined<T>(v: Undefinable<T>, msg: string): NotUndefined<T> {
    if (isNotUndefined(v)) {
        return v;
    }

    throw new TypeError(msg);
}
