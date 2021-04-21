import { RecoveryFn } from '../shared/Function';
import { Nullable } from './Nullable';

export type NullableTryRecoveryFn<T> = RecoveryFn<Nullable<T>>;

/**
 *  @deprecated Use NullableTryRecoveryFn in the same module.
 */
export type MayRecoveryFn<T> = NullableTryRecoveryFn<T>;

/**
 *  Return _v_ as `T` if the passed _v_ is not `null`.
 *  Otherwise, return the result of _def_.
 */
export function orElseForNullable<T>(v: Nullable<T>, def: NullableTryRecoveryFn<T>): Nullable<T> {
    if (v !== null) {
        return v;
    } else {
        const r = def();
        return r;
    }
}
