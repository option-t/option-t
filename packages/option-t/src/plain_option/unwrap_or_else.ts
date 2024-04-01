import type { RecoveryFn } from '../internal/function.js';
import type { Option } from './option.js';

/**
 *  Unwraps a result _input_, returns the content of an `Some(T)`.
 *  If the value is an `None` then it calls `def` with its value.
 */
export function unwrapOrElseForOption<T>(input: Option<T>, recoverer: RecoveryFn<T>): T {
    if (input.ok) {
        const val: T = input.val;
        return val;
    }

    const fallback = recoverer();
    return fallback;
}

/**
 *  @deprecated
 *
 *  This is kept for backward compatibility.
 *  Use {@link unwrapOrElseForOption} instead.
 */
export const unwrapOrElseFromOption: typeof unwrapOrElseForOption = unwrapOrElseForOption;
