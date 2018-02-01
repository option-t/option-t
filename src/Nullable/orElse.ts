import { RecoveryFn } from '../utils/Function';
import { Nullable } from './Nullable';

export type MayRecoveryFn<T> = RecoveryFn<Nullable<T>>;

/**
 *  Return _v_ as `T` if the passed _v_ is not `null`.
 *  Otherwise, return the result of _def_.
 */
export function orElseForNullable<T>(v: Nullable<T>, def: MayRecoveryFn<T>): Nullable<T> {
    if (v !== null) {
        return v;
    }
    else {
        const r = def();
        return r;
    }
}
