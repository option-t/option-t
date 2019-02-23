import { Nullable, NotNull, isNotNull } from './Nullable';

/**
 *  Return _v_ as `T` if the passed _v_ is not `null`.
 *  Otherwise, throw `TypeError` with the passed `msg`.
 */
export function expectNotNull<T>(v: Nullable<T>, msg: string): NotNull<T> {
    if (isNotNull(v)) {
        return v;
    }

    throw new TypeError(msg);
}
