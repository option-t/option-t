import { assertIsPromise } from '../internal/assert.js';
import { ERR_MSG_RECOVERER_MUST_RETURN_PROMISE } from '../internal/error_message.js';
import type { AsyncRecoveryFn } from '../internal/function.js';
import { type Option, isSome } from './option.js';
import { unwrapOption } from './unwrap.js';

/**
 *  Unwraps a result _input_, returns the content of an `Some(T)`.
 *  If the value is an `None` then it calls `def` with its value.
 */
export function unwrapOrElseAsyncFromOption<T>(
    input: Option<T>,
    recoverer: AsyncRecoveryFn<T>
): Promise<T> {
    if (isSome(input)) {
        const val: T = unwrapOption(input);
        return Promise.resolve(val);
    }

    const defaultValue: Promise<T> = recoverer();
    // If this is async function, this always return Promise, but not.
    // We should check to clarify the error case if user call this function from plain js
    // and they mistake to use this.
    assertIsPromise(defaultValue, ERR_MSG_RECOVERER_MUST_RETURN_PROMISE);
    return defaultValue;
}
