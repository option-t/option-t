import { RecoveryFn } from '../internal/Function';
import { Option } from './Option';

export type OptionTryRecoveryFn<T> = RecoveryFn<Option<T>>;

/**
 *  @deprecated Use OptionTryRecoveryFn in the same module.
 */
export type MayRecoveryFn<T> = OptionTryRecoveryFn<T>;

/**
 *  Return _input_ as `T` if the passed _input_ is `Some(T)`.
 *  Otherwise, return the result of _recoverer_.
 */
export function orElseForOption<T>(input: Option<T>, recoverer: OptionTryRecoveryFn<T>): Option<T> {
    if (input.ok) {
        return input;
    } else {
        const r = recoverer();
        return r;
    }
}
