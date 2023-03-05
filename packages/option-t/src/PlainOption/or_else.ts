import type { RecoveryFn } from '../internal/function.js';
import type { Option } from './option_.js';

export type OptionTryRecoveryFn<out T> = RecoveryFn<Option<T>>;

/**
 *  Return _input_ as `T` if the passed _input_ is `Some(T)`.
 *  Otherwise, return the result of _recoverer_.
 */
export function orElseForOption<T>(input: Option<T>, recoverer: OptionTryRecoveryFn<T>): Option<T> {
    if (input.ok) {
        return input;
    }

    const fallback = recoverer();
    return fallback;
}
