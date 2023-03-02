import { assertIsPromise } from '../internal/assert.js';
import { ERR_MSG_RECOVERER_MUST_RETURN_PROMISE } from '../internal/ErrorMessage.js';
import type { AsyncRecoveryFn } from '../internal/Function.js';

import { type Undefinable, isNotUndefined } from './Undefinable.js';

export type UndefinableAsyncTryRecoveryFn<out T> = AsyncRecoveryFn<Undefinable<T>>;

/**
 *  Return _input_ as `T` if the passed _input_ is not `undefined`.
 *  Otherwise, return the result of _recoverer_.
 */
export function orElseAsyncForUndefinable<T>(
    input: Undefinable<T>,
    recoverer: UndefinableAsyncTryRecoveryFn<T>
): Promise<Undefinable<T>> {
    if (isNotUndefined(input)) {
        return Promise.resolve(input);
    }

    const fallback = recoverer();

    // If this is async function, this always return Promise, but not.
    // We should check to clarify the error case if user call this function from plain js
    // and they mistake to use this.
    assertIsPromise(fallback, ERR_MSG_RECOVERER_MUST_RETURN_PROMISE);

    return fallback;
}
