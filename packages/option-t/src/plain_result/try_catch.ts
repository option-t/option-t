import { assertIsErrorInstance } from '../internal/assert.js';
import { ERR_MSG_THROWN_VALUE_IS_NOT_BUILTIN_ERROR_INSTANCE } from '../internal/error_message.js';
import type { ProducerFn } from '../internal/function.js';
import { type Result, createOk, createErr } from './result.js';

/**
 *  This function converts the returend value from _producer_ into `Ok(TValue)`.
 *  If _producer_ throw a something, this returns it with wrapping `Err(unknown)`.
 *
 *  NOTE:
 *  An user should narrow the scope of _producer_ to make it predictable that is in `Err(E)`.
 */
export function tryCatchIntoResult<T>(producer: ProducerFn<T>): Result<T, unknown> {
    try {
        const value: T = producer();
        const okWrapped = createOk<T>(value);
        return okWrapped;
    } catch (e: unknown) {
        const errWrapped = createErr<unknown>(e);
        return errWrapped;
    }
}

/**
 *  - This function converts the returend value from _producer_ into `Ok(TValue)`.
 *  - If _producer_ throw an `Error` instance of **current [relam][realm]**,
 *    this returns it with wrapping `Err(Error)`.
 *
 *  @throws {TypeError}
 *      This throws it if _producer_ throw the value that is not an instance of `Error` constructor of **current [relam][realm]**.
 *
 *  [realm]: https://262.ecma-international.org/14.0/#realm
 *
 * -----
 *
 *  NOTE:
 *  1. An user should narrow the scope of _producer_ to make it predictable that is in `Err(E)`.
 *  2. This function requires ES2022's `Error.cause` to get an actual thrown object.
 */
export function tryCatchIntoResultWithEnsureError<T>(producer: ProducerFn<T>): Result<T, Error> {
    try {
        const value: T = producer();
        const okWrapped = createOk<T>(value);
        return okWrapped;
    } catch (e: unknown) {
        assertIsErrorInstance(e, ERR_MSG_THROWN_VALUE_IS_NOT_BUILTIN_ERROR_INSTANCE);
        const errWrapped = createErr<Error>(e);
        return errWrapped;
    }
}
