import { expectOkForResult, expectErrForResult } from './expect';
import { Result } from './Result';

/**
 *  Return the inner `T` of a `Ok(T)`.
 *
 *  @throws {TypeError}
 *      Throws if the self is a `Err`.
 */
export function unwrapOkFromResult<T>(input: Result<T, unknown>): T | never {
    return expectOkForResult(input, 'called with `Err`');
}

/**
 *  @deprecated
 *  Use {@link unwrapOkFromResult}
 */
export const unwrapFromResult: typeof unwrapOkFromResult = unwrapOkFromResult;

/**
 *  Return the inner `E` of a `Err(E)`.
 *
 *  @throws {TypeError}
 *      Throws if the self is a `Ok`.
 */
export function unwrapErrFromResult<E>(input: Result<unknown, E>): E | never {
    return expectErrForResult(input, 'called with `Ok`');
}
