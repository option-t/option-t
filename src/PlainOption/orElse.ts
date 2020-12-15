import { RecoveryFn } from '../shared/Function';
import { Option } from './Option';

export type MayRecoveryFn<T> = RecoveryFn<Option<T>>;

/**
 *  Return _v_ as `T` if the passed _v_ is `Some(T)`.
 *  Otherwise, return the result of _recoverer_.
 */
export function orElseForOption<T>(v: Option<T>, recoverer: MayRecoveryFn<T>): Option<T> {
    if (v.ok) {
        return v;
    } else {
        const r = recoverer();
        return r;
    }
}
