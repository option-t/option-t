import { type Undefinable, isNotUndefined } from './undefinable.js';
import { type Result, createErr, createOk } from '../plain_result/result.js';
import type { AsyncRecoveryFn } from '../internal/function.js';
import { assertIsPromise } from '../internal/assert.js';
import { ERR_MSG_RECOVERER_MUST_RETURN_PROMISE } from '../internal/error_message.js';

/**
 * Transforms the `Undefinable<T>` into a `Result<T, E>` by mapping `T` to `Ok(T)`.
 * If `input` is `undefined`, then returns `Err(E)` with the result of `recoverer()`
 */
export function okOrElseAsyncForUndefinable<T, E>(
    input: Undefinable<T>,
    recoverer: AsyncRecoveryFn<E>
): Promise<Result<T, E>> {
    if (isNotUndefined(input)) {
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
