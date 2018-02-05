import { RecoveryFn } from '../shared/Function';
import { Option } from './Option';

export type MayRecoveryFn<T> = RecoveryFn<Option<T>>;

export function orElseForOption<T>(a: Option<T>, b: MayRecoveryFn<T>): Option<T> {
    if (a.ok) {
        return a;
    }
    else {
        const r = b();
        return r;
    }
}
