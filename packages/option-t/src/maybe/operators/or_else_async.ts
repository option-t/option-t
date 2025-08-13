import type { AsyncRecoveryFn } from '../../internal/function.js';

import { type Maybe, isNotNullOrUndefined } from '../core/maybe.js';

export type MaybeAsyncRecoveryFn<out T> = AsyncRecoveryFn<Maybe<T>>;

/**
 *  Return _input_ as `T` if the passed _input_ is not `null` and `undefined`.
 *  Otherwise, return the result of _recoverer_.
 */
export async function orElseAsyncForMaybe<T>(
    input: Maybe<T>,
    recoverer: MaybeAsyncRecoveryFn<T>,
): Promise<Maybe<T>> {
    if (isNotNullOrUndefined(input)) {
        return input;
    }

    const fallback: Maybe<T> = await recoverer();
    return fallback;
}
