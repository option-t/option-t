import { expectIsOk, expectIsErr } from './expect';
import { Result } from './Result';

/**
 *  Return the inner `T` of a `Ok(T)`.
 *
 *  @throws {TypeError}
 *      Throws if the self is a `Err`.
 */
export function unwrapFromResult<T>(input: Result<T, unknown>): T | never {
    return expectIsOk(input, 'called with `Err`');
}

/**
 *  Return the inner `E` of a `Err(E)`.
 *
 *  @throws {TypeError}
 *      Throws if the self is a `Ok`.
 */
export function unwrapErrFromResult<E>(input: Result<unknown, E>): E | never {
    return expectIsErr(input, 'called with `Ok`');
}
