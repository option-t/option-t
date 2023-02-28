import type { RecoveryFn } from '../internal/Function.js';
import type { Maybe } from './Maybe.js';

export type MaybeRecoveryFn<out T> = RecoveryFn<Maybe<T>>;

/**
 *  Return _input_ as `T` if the passed _input_ is not `null` and `undefined`.
 *  Otherwise, return the result of _recoverer_.
 */
export function orElseForMaybe<T>(input: Maybe<T>, recoverer: MaybeRecoveryFn<T>): Maybe<T> {
    if (input !== undefined && input !== null) {
        return input;
    }

    const fallback = recoverer();
    return fallback;
}
