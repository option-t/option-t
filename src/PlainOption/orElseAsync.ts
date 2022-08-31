import { assertIsPromise } from '../internal/assert.js';
import { ERR_MSG_RECOVERER_MUST_RETURN_PROMISE } from '../internal/ErrorMessage.js';
import type { AsyncRecoveryFn } from '../internal/Function.js';
import { Option, isSome } from './Option.js';

export type OptionAsyncTryRecoveryFn<T> = AsyncRecoveryFn<Option<T>>;

/**
 *  Return _input_ as `T` if the passed _input_ is `Some(T)`.
 *  Otherwise, return the result of _recoverer_.
 */
export function orElseAsyncForOption<T>(
    input: Option<T>,
    recoverer: OptionAsyncTryRecoveryFn<T>
): Promise<Option<T>> {
    if (isSome(input)) {
        return Promise.resolve(input);
    }

    const defaultValue = recoverer();
    // If this is async function, this always return Promise, but not.
    // We should check to clarify the error case if user call this function from plain js
    // and they mistake to use this.
    assertIsPromise(defaultValue, ERR_MSG_RECOVERER_MUST_RETURN_PROMISE);
    return defaultValue;
}
