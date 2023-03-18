import type { AsyncRecoveryFromErrorFn } from '../internal/function.js';
import { type Result, isOk } from './result.js';
import { unwrapOkFromResult, unwrapErrFromResult } from './unwrap.js';

/**
 *  Unwraps _input_, returns the content of an `Ok(T)`.
 *  If the value is an `Err(E)` then it calls `recoverer` with its value.
 */
export async function unwrapOrElseAsyncFromResult<T, E>(
    input: Result<T, E>,
    recoverer: AsyncRecoveryFromErrorFn<E, T>
): Promise<T> {
    if (isOk(input)) {
        const value: T = unwrapOkFromResult(input);
        return value;
    }

    const error: E = unwrapErrFromResult(input);
    const defaultValue: T = await recoverer(error);
    return defaultValue;
}
