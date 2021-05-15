import { assertIsPromise } from '../internal/assert';
import { ERR_MSG_RECOVERER_MUST_RETURN_PROMISE } from '../internal/ErrorMessage';
import type { AsyncRecoveryFn } from '../internal/Function';

import { Undefinable, isNotUndefined } from './Undefinable';

export type UndefinableAsyncTryRecoveryFn<T> = AsyncRecoveryFn<Undefinable<T>>;

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
