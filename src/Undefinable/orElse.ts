import { RecoveryFn } from '../utils/Function';
import { Undefinable } from './Undefinable';

export type MayRecoveryFn<T> = RecoveryFn<Undefinable<T>>;

export function orElseForUndefinable<T>(a: Undefinable<T>, b: MayRecoveryFn<T>): Undefinable<T> {
    if (a !== undefined) {
        return a;
    }
    else {
        const r = b();
        return r;
    }
}
