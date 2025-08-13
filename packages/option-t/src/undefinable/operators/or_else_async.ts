import type { AsyncRecoveryFn } from '../../internal/function.js';

import { type Undefinable, isNotUndefined } from '../core/undefinable.js';

export type UndefinableAsyncTryRecoveryFn<out T> = AsyncRecoveryFn<Undefinable<T>>;

/**
 *  Return _input_ as `T` if the passed _input_ is not `undefined`.
 *  Otherwise, return the result of _recoverer_.
 */
export async function orElseAsyncForUndefinable<T>(
    input: Undefinable<T>,
    recoverer: UndefinableAsyncTryRecoveryFn<T>,
): Promise<Undefinable<T>> {
    if (isNotUndefined(input)) {
        return input;
    }

    const fallback: Undefinable<T> = await recoverer();
    return fallback;
}
