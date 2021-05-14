import { assertIsPromise } from '../internal/assert';
import { ERR_MSG_RECOVERER_MUST_RETURN_PROMISE } from '../internal/ErrorMessage';
import type { AsyncRecoveryFn } from '../internal/Function';
import { Nullable, isNotNull } from './Nullable';

export type NullableAsyncTryRecoveryFn<T> = AsyncRecoveryFn<Nullable<T>>;

/**
 *  Return _input_ as `T` if the passed _input_ is not `null`.
 *  Otherwise, return the result of _recoverer_.
 */
export function orElseAsyncForNullable<T>(
    input: Nullable<T>,
    recoverer: NullableAsyncTryRecoveryFn<T>
): Promise<Nullable<T>> {
    if (isNotNull(input)) {
        return Promise.resolve(input);
    }

    const fallback: Promise<Nullable<T>> = recoverer();
    // If this is async function, this always return Promise, but not.
    // We should check to clarify the error case if user call this function from plain js
    // and they mistake to use this.
    assertIsPromise(fallback, ERR_MSG_RECOVERER_MUST_RETURN_PROMISE);
    return fallback;
}
