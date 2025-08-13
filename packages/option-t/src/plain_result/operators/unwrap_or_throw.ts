import { type Result, isOk } from '../core/result.js';
import {
    // We don't expose this as a implementation detail.
    CausalCarrierError,
} from '../internal/causal_carrier.js';
import {
    unsafeUnwrapValueInErrWithoutAnyCheck,
    unsafeUnwrapValueInOkWithoutAnyCheck,
} from '../internal/intrinsics_unsafe.js';

/**
 *  Unwraps _input_, returns the content of an `Ok(T)`.
 *  Otherwise, this function throw a new `Error` instance with setting the original `E`
 *  in `Err(E)` to `.cause` property of the `Error` instance.
 *
 *  This matches the convention that is "a thrown object is always an `Error` instance".
 *  To achive this, this function requires `Error.cause` to carry the failure reason.
 *
 *  __We DO NOT RECCOMEND TO USE THIS function generally__.
 *
 *  This function is provided only to improve an interoperability with the world using "throw error" convention.
 *  __We do not recommend to use this function__.
 *
 *  @throws {Error}
 *      If the _input_ is `Err(E)`,
 *      this throw an new `Error` instance with setting the original `E` to `.cause` property.
 */
export function unwrapOrThrowForResult<T, E>(input: Result<T, E>): T {
    if (isOk(input)) {
        const val: T = unsafeUnwrapValueInOkWithoutAnyCheck<T>(input);
        return val;
    }

    const cause: E = unsafeUnwrapValueInErrWithoutAnyCheck(input);
    const wrapper = new CausalCarrierError<E>(cause);
    throw wrapper;
}
