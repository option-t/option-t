import { Option } from './Option';

/**
 *  Return _v_ as `T` if the passed _v_ is `Some(T)`.
 *  Otherwise, throw `TypeError` with the passed `msg`.
 */
export function expectIsSome<T>(v: Option<T>, msg: string): T | never {
    if (!v.ok) {
        throw new TypeError(msg);
    }

    return v.val;
}
