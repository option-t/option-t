import { type Result, isOk } from './Result.js';
import { unwrapErrFromResult, unwrapOkFromResult } from './unwrap.js';

/**
 *  Unwraps _input_, returns the content of an `Ok(T)`.
 *  Otherwise, this function throw the contained `Error` in `Err(Error)`.
 *
 *  @deprecated
 *  This function is marked as _deprecated_ as meaning of __not recommend to use__.
 *
 *  This marking displays this function usages with strikethrough line decolation on an editor.
 *
 *  This function is provided only to improve an interoperability with the world using "throw error" convention.
 *  __We do not recommend to use this function__.
 */
export function unwrapOrThrowErrorFromResult<T>(input: Result<T, Error>): T {
    if (isOk(input)) {
        const val: T = unwrapOkFromResult<T>(input);
        return val;
    }

    const e: unknown = unwrapErrFromResult(input);
    if (!(e instanceof Error)) {
        throw new TypeError(
            `The contained E should be \`Error\` instance but that was \`${String(e)}\``,
            {
                cause: e,
            }
        );
    }

    throw e;
}
