import { RecoveryFn } from '../shared/Function.ts';
import { Undefinable } from './Undefinable.ts';

export type MayRecoveryFn<T> = RecoveryFn<Undefinable<T>>;

/**
 *  Return _v_ as `T` if the passed _v_ is not `undefined`.
 *  Otherwise, return the result of _def_.
 */
export function orElseForUndefinable<T>(v: Undefinable<T>, def: MayRecoveryFn<T>): Undefinable<T> {
    if (v !== undefined) {
        return v;
    }
    else {
        const r = def();
        return r;
    }
}
