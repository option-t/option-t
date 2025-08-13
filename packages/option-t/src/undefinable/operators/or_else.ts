import type { RecoveryFn } from '../../internal/function.js';
import type { Undefinable } from '../core/undefinable.js';

export type UndefinableTryRecoveryFn<out T> = RecoveryFn<Undefinable<T>>;

/**
 *  Return _input_ as `T` if the passed _input_ is not `undefined`.
 *  Otherwise, return the result of _recoverer_.
 */
export function orElseForUndefinable<T>(
    input: Undefinable<T>,
    recoverer: UndefinableTryRecoveryFn<T>,
): Undefinable<T> {
    if (input !== undefined) {
        return input;
    }

    const fallback = recoverer();
    return fallback;
}
