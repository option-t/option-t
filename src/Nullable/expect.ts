import { Nullable, NotNull } from './Nullable';

/**
 *  Return _v_ as `T` if the passed _v_ is not `null`.
 *  Otherwise, throw `TypeError` with the passed `msg`.
 */
export function expectNotNull<T>(v: Nullable<T>, msg: string): NotNull<T> {
    if (v === null) {
        throw new TypeError(msg);
    }

    return v;
}
