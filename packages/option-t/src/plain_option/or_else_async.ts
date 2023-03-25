import type { AsyncRecoveryFn } from '../internal/function.js';
import { type Option, isSome } from './option.js';

export type OptionAsyncTryRecoveryFn<out T> = AsyncRecoveryFn<Option<T>>;

/**
 *  Return _input_ as `T` if the passed _input_ is `Some(T)`.
 *  Otherwise, return the result of _recoverer_.
 */
export async function orElseAsyncForOption<T>(
    input: Option<T>,
    recoverer: OptionAsyncTryRecoveryFn<T>
): Promise<Option<T>> {
    if (isSome(input)) {
        return input;
    }

    const defaultValue: Option<T> = await recoverer();
    return defaultValue;
}
