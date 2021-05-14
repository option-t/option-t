import { RecoveryFn } from '../internal/Function';
import { Nullable } from './Nullable';

export type NullableTryRecoveryFn<T> = RecoveryFn<Nullable<T>>;

/**
 *  @deprecated Use NullableTryRecoveryFn in the same module.
 */
export type MayRecoveryFn<T> = NullableTryRecoveryFn<T>;

/**
 *  Return _input_ as `T` if the passed _input_ is not `null`.
 *  Otherwise, return the result of _recoverer_.
 */
export function orElseForNullable<T>(
    input: Nullable<T>,
    recoverer: NullableTryRecoveryFn<T>
): Nullable<T> {
    if (input !== null) {
        return input;
    }

    const fallback = recoverer();
    return fallback;
}
