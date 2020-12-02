import { expectIsOk, expectIsErr } from './expect';
import { Result } from './Result';

/**
 *  Return the inner `T` of a `Ok(T)`.
 *
 *  @throws {TypeError}
 *      Throws if the self is a `Err`.
 */
export function unwrapFromResult<T>(v: Result<T, unknown>): T | never {
    return expectIsOk(v, 'called with `Err`');
}

/**
 *  Return the inner `E` of a `Err(E)`.
 *
 *  @throws {TypeError}
 *      Throws if the self is a `Ok`.
 */
export function unwrapErrFromResult<E>(v: Result<unknown, E>): E | never {
    return expectIsErr(v, 'called with `Ok`');
}
