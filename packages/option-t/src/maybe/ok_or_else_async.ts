import { assertIsPromise } from '../internal/assert.js';
import { ERR_MSG_RECOVERER_MUST_RETURN_PROMISE } from '../internal/error_message.js';
import type { AsyncRecoveryFn } from '../internal/function.js';

import { type Maybe, isNotNullOrUndefined } from './maybe.js';
import { type Result, createErr, createOk } from '../plain_result/result.js';

/**
 * Transforms the `Maybe<T>` into a `Result<T, E>` by mapping `T` to `Ok(T)`.
 * If `input` is `undefined` or `null`, then returns `Err(E)` with the result of `recoverer()`
 */
export function okOrElseAsyncForMaybe<T, E>(
    input: Maybe<T>,
    recoverer: AsyncRecoveryFn<E>
): Promise<Result<T, E>> {
    if (isNotNullOrUndefined(input)) {
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
