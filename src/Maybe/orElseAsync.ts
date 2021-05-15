import { assertIsPromise } from '../internal/assert';
import { ERR_MSG_RECOVERER_MUST_RETURN_PROMISE } from '../internal/ErrorMessage';
import type { AsyncRecoveryFn } from '../internal/Function';

import { Maybe, isNotNullAndUndefined } from './Maybe';

export type MaybeAsyncRecoveryFn<T> = AsyncRecoveryFn<Maybe<T>>;

/**
 *  Return _input_ as `T` if the passed _input_ is not `null` and `undefined`.
 *  Otherwise, return the result of _recoverer_.
 */
export function orElseAsyncForMaybe<T>(
    input: Maybe<T>,
    recoverer: MaybeAsyncRecoveryFn<T>
): Promise<Maybe<T>> {
    if (isNotNullAndUndefined(input)) {
        return Promise.resolve(input);
    }

    const fallback = recoverer();

    // If this is async function, this always return Promise, but not.
    // We should check to clarify the error case if user call this function from plain js
    // and they mistake to use this.
    assertIsPromise(fallback, ERR_MSG_RECOVERER_MUST_RETURN_PROMISE);

    return fallback;
}
