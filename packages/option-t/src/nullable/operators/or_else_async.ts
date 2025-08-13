import type { AsyncRecoveryFn } from '../../internal/function.js';
import { type Nullable, isNotNull } from '../core/nullable.js';

export type NullableAsyncTryRecoveryFn<out T> = AsyncRecoveryFn<Nullable<T>>;

/**
 *  Return _input_ as `T` if the passed _input_ is not `null`.
 *  Otherwise, return the result of _recoverer_.
 */
export async function orElseAsyncForNullable<T>(
    input: Nullable<T>,
    recoverer: NullableAsyncTryRecoveryFn<T>,
): Promise<Nullable<T>> {
    if (isNotNull(input)) {
        return input;
    }

    const fallback: Nullable<T> = await recoverer();
    return fallback;
}
