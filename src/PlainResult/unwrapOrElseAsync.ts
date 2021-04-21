import { assertIsPromise } from '../shared/assert';
import { ERR_MSG_RECOVERER_MUST_RETURN_PROMISE } from '../shared/ErrorMessage';
import type { AsyncRecoveryFromErrorFn } from '../shared/Function';
import { Result, isOk } from './Result';
import { unwrapFromResult, unwrapErrFromResult } from './unwrap';

/**
 *  Unwraps _input_, returns the content of an `Ok(T)`.
 *  If the value is an `Err(E)` then it calls `recoverer` with its value.
 */
export function unwrapOrElseAsyncFromResult<T, E>(
    input: Result<T, E>,
    recoverer: AsyncRecoveryFromErrorFn<E, T>
): Promise<T> {
    if (isOk(input)) {
        const value = unwrapFromResult(input);
        return Promise.resolve(value);
    }

    const error: E = unwrapErrFromResult(input);
    const defaultValue: Promise<T> = recoverer(error);
    // If this is async function, this always return Promise, but not.
    // We should check to clarify the error case if user call this function from plain js
    // and they mistake to use this.
    assertIsPromise(defaultValue, ERR_MSG_RECOVERER_MUST_RETURN_PROMISE);
    return defaultValue;
}
