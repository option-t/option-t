import { expectIsOk, expectIsErr } from './expect.ts';
import { Result } from './Result.ts';

/**
 *  Return the inner `T` of a `Ok(T)`.
 *
 *  @throws {TypeError}
 *      Throws if the self is a `Err`.
 */
export function unwrapFromResult<T, E>(v: Result<T, E>): T | never {
    return expectIsOk(v, 'called with `Err`');
}

/**
 *  Return the inner `E` of a `Err(E)`.
 *
 *  @throws {TypeError}
 *      Throws if the self is a `Ok`.
 */
export function unwrapErrFromResult<T, E>(v: Result<T, E>): E | never {
    return expectIsErr(v, 'called with `Ok`');
}
