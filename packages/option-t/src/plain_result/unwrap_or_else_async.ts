import type { AsyncRecoveryFromErrorFn } from '../internal/function.js';
import { type Result, isOk, unwrapErr, unwrapOk } from './result.js';

/**
 *  Unwraps _input_, returns the content of an `Ok(T)`.
 *  If the value is an `Err(E)` then it calls `recoverer` with its value.
 */
export async function unwrapOrElseAsyncFromResult<T, E>(
    input: Result<T, E>,
    recoverer: AsyncRecoveryFromErrorFn<E, T>
): Promise<T> {
    if (isOk(input)) {
        const value: T = unwrapOk(input);
        return value;
    }

    const error: E = unwrapErr(input);
    const defaultValue: T = await recoverer(error);
    return defaultValue;
}
