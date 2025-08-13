import { assertIsErrorInstance } from '../../internal/assert.js';
import type { ProducerFn } from '../../internal/function.js';
import { type Result, createOk, createErr } from '../core/result.js';
import { ERR_MSG_THROWN_VALUE_IS_NOT_BUILTIN_ERROR_INSTANCE } from '../internal/error_message.js';

/**
 *  - This function converts the returend value from _producer_ into `Ok(T)`.
 *  - If _producer_ throw an `Error` instance of **current [realm][realm]**,
 *    this returns it with wrapping `Err(Error)`.
 *
 *  @throws {TypeError}
 *      This throws it if _producer_ throw the value that is not an instance of `Error` constructor of **current [realm][realm]**.
 *
 *  [realm]: https://262.ecma-international.org/14.0/#realm
 *
 *  @deprecated
 *  Please consider to use `tryCatchIntoResultWithEnsureError` too.
 *
 * -----
 *
 *  NOTE:
 *  1. An user should narrow the scope of _producer_ to make it predictable that is in `Err(E)`.
 *  2. This function requires ES2022's `Error.cause` to get an actual thrown object.
 *  3. Basically, we don't recomment to use this to create a `Result<T, E>`.
 *     Generally, you should define an `Err(E)` by depending on an use case context
 *     Use this operator just to make a bridge to existing codebase
 *     that you cannot inspect deeply to details.
 */
export function tryCatchIntoResultWithAssertError<T>(producer: ProducerFn<T>): Result<T, Error> {
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
