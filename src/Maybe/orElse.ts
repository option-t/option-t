import { RecoveryFn } from '../utils/Function';
import { Maybe } from './Maybe';

export type MaybeRecoveryFn<T> = RecoveryFn<Maybe<T>>;

export function orElseForMaybe<T>(a: Maybe<T>, b: MaybeRecoveryFn<T>): Maybe<T> {
    if (a !== undefined && a !== null) {
        return a;
    }
    else {
        const r = b();
        return r;
    }
}
