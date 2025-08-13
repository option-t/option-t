import { type Result, isOk } from '../core/result.js';
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
 *  Otherwise, this function throw the contained `unknown` __directly__ in `Err(unknown)`.
 *
 *  __We DO NOT RECCOMEND TO USE THIS function generally__.
 *
 *  This function is provided only to improve an interoperability with the world using "throw error" convention.
 *  __We do not recommend to use this function__.
 *
 *  @throws {unknown}
 *      This throws an inner value wrapped by Err(unknown)` __directly__.
 */
export function unwrapOrThrowUnknownDirectlyForResult<T>(input: Result<T, unknown>): T {
    if (isOk(input)) {
        const val: T = unsafeUnwrapValueInOkWithoutAnyCheck<T>(input);
        return val;
    }

    const e: unknown = unsafeUnwrapValueInErrWithoutAnyCheck(input);
    throw e;
}
