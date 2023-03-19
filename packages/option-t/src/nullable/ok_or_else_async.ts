import { assertIsPromise } from '../internal/assert.js';
import { ERR_MSG_RECOVERER_MUST_RETURN_PROMISE } from '../internal/error_message.js';
import type { AsyncRecoveryFn } from '../internal/function.js';

import { type Nullable, isNotNull } from './nullable.js';
import { type Result, createErr, createOk } from '../plain_result/result.js';

/**
 * Transforms the `Nullable<T>` into a `Result<T, E>` by mapping `T` to `Ok(T)`.
 * If `input` is `null`, then returns `Err(E)` with the result of `recoverer()`
 */
export function okOrElseAsyncForNullable<T, E>(
    input: Nullable<T>,
    recoverer: AsyncRecoveryFn<E>
): Promise<Result<T, E>> {
    if (isNotNull(input)) {
        const okWrapped = createOk<T>(input);
        return Promise.resolve(okWrapped);
    }

    const fallback: Promise<E> = recoverer();
    // If this is async function, this always return Promise, but not.
    // We should check to clarify the error case if user call this function from plain js
    // and they mistake to use this.
    assertIsPromise(fallback, ERR_MSG_RECOVERER_MUST_RETURN_PROMISE);
    const errWrapped = fallback.then(createErr);
    return errWrapped;
}
