import { RecoveryFn } from '../utils/Function';
import { Nullable } from './Nullable';

export type MayRecoveryFn<T> = RecoveryFn<Nullable<T>>;

export function orElseForNullable<T>(a: Nullable<T>, b: MayRecoveryFn<T>): Nullable<T> {
    if (a !== null) {
        return a;
    }
    else {
        const r = b();
        return r;
    }
}
