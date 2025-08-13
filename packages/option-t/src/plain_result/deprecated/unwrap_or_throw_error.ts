import { assertIsErrorInstance } from '../../internal/assert.js';
import { type Result, isOk } from '../core/result.js';
import { ERR_MSG_CONTAINED_TYPE_E_SHOULD_BE_BUILTIN_ERROR_INSTANCE } from '../internal/error_message.js';
import {
    unsafeUnwrapValueInErrWithoutAnyCheck,
    unsafeUnwrapValueInOkWithoutAnyCheck,
} from '../internal/intrinsics_unsafe.js';

/**
 *  @deprecated 48.1.0
 *  This operator throws the `Error` contained in _input_ directly
 *  but its stack trace informartion lacks the information about where throws it actually.
 *  To keep it, use `unwrapOrThrowForResult` exported from following instead:
 *
 *  - `option-t/plain_result`
 *  - `option-t/plain_result/unwrap_or_throw`
 *  - `option-t/plain_result/namespace` exports it as `Result.unwrapOrThrow()`
 *
 *  It throw a new `Error` with keeping the original error as `Error.cause` property.
 *
 *  -------
 *
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
 *      If `Err` conatins the value that is not an instance of `Error` constructor of **current [realm][realm]**,
 *      this throws an `TypeError` with setting the original value to `.cause`.
 *
 *  [realm]: https://262.ecma-international.org/14.0/#realm
 */
export function unwrapOrThrowWithAssertErrorForResult<T>(input: Result<T, Error>): T {
    if (isOk(input)) {
        const val: T = unsafeUnwrapValueInOkWithoutAnyCheck<T>(input);
        return val;
    }

    const e: unknown = unsafeUnwrapValueInErrWithoutAnyCheck(input);
    assertIsErrorInstance(e, ERR_MSG_CONTAINED_TYPE_E_SHOULD_BE_BUILTIN_ERROR_INSTANCE);
    throw e;
}
