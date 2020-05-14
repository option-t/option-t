import { Result } from './Result.ts';

/**
 *  Return _v_ as `T` if the passed _v_ is `Ok(T)`.
 *  Otherwise, throw `TypeError` with the passed `msg`.
 */
export function expectIsOk<T, E>(v: Result<T, E>, msg: string): T | never {
    if (!v.ok) {
        throw new TypeError(msg);
    }

    return v.val;
}

/**
 *  Return _v_ as `E` if the passed _v_ is `Err(E)`.
 *  Otherwise, throw `TypeError` with the passed `msg`.
 */
export function expectIsErr<T, E>(v: Result<T, E>, msg: string): E | never {
    if (v.ok) {
        throw new TypeError(msg);
    }

    return v.err;
}
