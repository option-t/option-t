import { ERR_MSG_FOR_ERROR_OBJECT_GENERATED_BY_UNWRAP_OR_THROW } from './internal/error_message.js';
import { type Result, isOk, unwrapOk, unwrapErr } from './result.js';

const WRAPPER_NAME = 'CausalCarrierError' as const;

// We don't expose this as a implementation detail.
class CausalCarrierError<E> extends Error {
    override name: typeof WRAPPER_NAME = WRAPPER_NAME;

    constructor(cause: E) {
        super(ERR_MSG_FOR_ERROR_OBJECT_GENERATED_BY_UNWRAP_OR_THROW, {
            cause,
        });
    }
}

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
        const val: T = unwrapOk<T>(input);
        return val;
    }

    const cause: E = unwrapErr(input);
    const wrapper = new CausalCarrierError<E>(cause);
    throw wrapper;
}
