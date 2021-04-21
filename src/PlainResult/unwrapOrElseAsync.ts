import { assertIsPromise } from '../shared/assert';
import { ERR_MSG_RECOVERER_MUST_RETURN_PROMISE } from '../shared/ErrorMessage';
import type { AsyncRecoveryFromErrorFn } from '../shared/Function';
import { Result, isOk } from './Result';
import { unwrapFromResult, unwrapErrFromResult } from './unwrap';

/**
 *  Unwraps a result _v_, returns the content of an `Ok(T)`.
 *  If the value is an `Err(E)` then it calls `recoverer` with its value.
 */
export function unwrapOrElseAsyncFromResult<T, E>(
    src: Result<T, E>,
    recoverer: AsyncRecoveryFromErrorFn<E, T>
): Promise<T> {
    if (isOk(src)) {
        const value = unwrapFromResult(src);
        return Promise.resolve(value);
    }

    const error: E = unwrapErrFromResult(src);
    const defaultValue: Promise<T> = recoverer(error);
    // If this is async function, this always return Promise, but not.
    // We should check to clarify the error case if user call this function from plain js
    // and they mistake to use this.
    assertIsPromise(defaultValue, ERR_MSG_RECOVERER_MUST_RETURN_PROMISE);
    return defaultValue;
}
