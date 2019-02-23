import { Maybe, NotNullAndUndefined, isNotNullAndUndefined } from './Maybe';

/**
 *  Return _v_ as `T` if the passed _v_ is not `null` and `undefined`.
 *  Otherwise, throw `TypeError` with the passed `msg`.
 */
export function expectNotNullAndUndefined<T>(v: Maybe<T>, msg: string): NotNullAndUndefined<T> {
    if (isNotNullAndUndefined(v)) {
        return v;
    }

    throw new TypeError(msg);
}
