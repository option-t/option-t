import { assertIsPromise } from '../shared/assert';
import { ERR_MSG_RECOVERER_MUST_RETURN_PROMISE } from '../shared/ErrorMessage';
import type { AsyncRecoveryFn } from '../shared/Function';
import { Nullable, isNotNull } from './Nullable';

export type NullableAsyncTryRecoveryFn<T> = AsyncRecoveryFn<Nullable<T>>;

/**
 *  Return _v_ as `T` if the passed _src_ is not `null`.
 *  Otherwise, return the result of _recoverer_.
 */
export function orElseAsyncForNullable<T>(
    src: Nullable<T>,
    recoverer: NullableAsyncTryRecoveryFn<T>
): Promise<Nullable<T>> {
    if (isNotNull(src)) {
        return Promise.resolve(src);
    }

    const defaultValue: Promise<Nullable<T>> = recoverer();
    // If this is async function, this always return Promise, but not.
    // We should check to clarify the error case if user call this function from plain js
    // and they mistake to use this.
    assertIsPromise(defaultValue, ERR_MSG_RECOVERER_MUST_RETURN_PROMISE);
    return defaultValue;
}
