import { RecoveryFn } from '../shared/Function.ts';
import { Maybe } from './Maybe.ts';

export type MaybeRecoveryFn<T> = RecoveryFn<Maybe<T>>;

/**
 *  Return _v_ as `T` if the passed _v_ is not `null` and `undefined`.
 *  Otherwise, return the result of _def_.
 */
export function orElseForMaybe<T>(v: Maybe<T>, def: MaybeRecoveryFn<T>): Maybe<T> {
    if (v !== undefined && v !== null) {
        return v;
    }
    else {
        const r = def();
        return r;
    }
}
