import { RecoveryFn } from '../internal/Function';
import { Maybe } from './Maybe';

export type MaybeRecoveryFn<T> = RecoveryFn<Maybe<T>>;

/**
 *  Return _input_ as `T` if the passed _input_ is not `null` and `undefined`.
 *  Otherwise, return the result of _recoverer_.
 */
export function orElseForMaybe<T>(input: Maybe<T>, recoverer: MaybeRecoveryFn<T>): Maybe<T> {
    if (input !== undefined && input !== null) {
        return input;
    } else {
        const r = recoverer();
        return r;
    }
}
