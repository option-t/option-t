import { RecoveryFn } from '../internal/Function';
import { Undefinable } from './Undefinable';

export type UndefinableTryRecoveryFn<T> = RecoveryFn<Undefinable<T>>;

/**
 *  @deprecated Use TryRecoveryFn in the same module.
 */
export type MayRecoveryFn<T> = UndefinableTryRecoveryFn<T>;

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
    } else {
        const r = recoverer();
        return r;
    }
}
