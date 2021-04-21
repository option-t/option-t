import { RecoveryFn } from '../shared/Function';
import { Undefinable } from './Undefinable';

export type UndefinableTryRecoveryFn<T> = RecoveryFn<Undefinable<T>>;

/**
 *  @deprecated Use TryRecoveryFn in the same module.
 */
export type MayRecoveryFn<T> = UndefinableTryRecoveryFn<T>;

/**
 *  Return _v_ as `T` if the passed _v_ is not `undefined`.
 *  Otherwise, return the result of _def_.
 */
export function orElseForUndefinable<T>(
    v: Undefinable<T>,
    def: UndefinableTryRecoveryFn<T>
): Undefinable<T> {
    if (v !== undefined) {
        return v;
    } else {
        const r = def();
        return r;
    }
}
