import { RecoveryFn } from '../internal/Function';
import { Undefinable } from './Undefinable';

export type UndefinableTryRecoveryFn<T> = RecoveryFn<Undefinable<T>>;

/**
 *  Return _input_ as `T` if the passed _input_ is not `undefined`.
 *  Otherwise, return the result of _recoverer_.
 */
export function orElseForUndefinable<T>(
    input: Undefinable<T>,
    recoverer: UndefinableTryRecoveryFn<T>
): Undefinable<T> {
    if (input !== undefined) {
        return input;
    }

    const fallback = recoverer();
    return fallback;
}
