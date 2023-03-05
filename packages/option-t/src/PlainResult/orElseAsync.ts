import { assertIsPromise } from '../internal/assert.js';
import { ERR_MSG_RECOVERER_MUST_RETURN_PROMISE } from '../internal/error_message.js';
import type { AsyncRecoveryFromErrorFn } from '../internal/function.js';
import { type Result, isOk } from './Result.js';
import { unwrapErrFromResult } from './unwrap.js';

export type ResultAsyncTryRecoveryFromErrorFn<in E, out T, out F> = AsyncRecoveryFromErrorFn<
    E,
    Result<T, F>
>;

/**
 *  Calls _recoverer_ and return its returned value if the result is `Err(E)`,
 *  otherwise returns the `Ok(T)` value of self.
 */
export function orElseAsyncForResult<T, E, F>(
    input: Result<T, E>,
    recoverer: ResultAsyncTryRecoveryFromErrorFn<E, T, F>
): Promise<Result<T, F>> {
    if (isOk(input)) {
        return Promise.resolve(input);
    }

    const inner = unwrapErrFromResult(input);
    const defaultValue: Promise<Result<T, F>> = recoverer(inner);
    // If this is async function, this always return Promise, but not.
    // We should check to clarify the error case if user call this function from plain js
    // and they mistake to use this.
    assertIsPromise(defaultValue, ERR_MSG_RECOVERER_MUST_RETURN_PROMISE);
    return defaultValue;
}
