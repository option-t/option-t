import { assertIsErrorInstance } from '../internal/assert.js';
import { ERR_MSG_CONTAINED_TYPE_E_SHOULD_BE_BUILTIN_ERROR_INSTANCE } from '../internal/error_message.js';
import { type Result, isOk, unwrapOk, unwrapErr } from './result.js';

/**
 *  Unwraps _input_, returns the content of an `Ok(T)`.
 *  Otherwise, this function throw the contained `Error` in `Err(Error)`.
 *
 *  __We DO NOT RECCOMEND TO USE THIS function generally__.
 *
 *  This function is provided only to improve an interoperability with the world using "throw error" convention.
 *  __We do not recommend to use this function__.
 *
 *  This function requires `Error.cause` to carry the failure reason
 *  if it is not an `Error` instance.
 *
 *  @throws {Error}
 *      This throws an inner value wrapped by Err(Error)`.
 *
 *  @throws {TypeError}
 *      If `Err` conatins a non `Error` instance value at the running time,
 *      this throws an `TypeError` with setting the original value to `.cause`.
 */
export function unwrapOrThrowWithEnsureErrorForResult<T>(input: Result<T, Error>): T {
    if (isOk(input)) {
        const val: T = unwrapOk<T>(input);
        return val;
    }

    const e: unknown = unwrapErr(input);
    assertIsErrorInstance(e, ERR_MSG_CONTAINED_TYPE_E_SHOULD_BE_BUILTIN_ERROR_INSTANCE);
    throw e;
}
