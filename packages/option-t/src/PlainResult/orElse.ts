import type { RecoveryFromErrorFn } from '../internal/Function.js';
import { type Result } from './Result.js';

export type ResultTryRecoveryFromErrorFn<T, E, F> = RecoveryFromErrorFn<E, Result<T, F>>;

/**
 *  Calls _recoverer_ and return its returned value if _input_ is `Err(E)`,
 *  otherwise returns _input_ as `Ok(T)`.
 *  This function can be used for control flow based on result values.
 */
export function orElseForResult<T, E, F>(
    input: Result<T, E>,
    recoverer: ResultTryRecoveryFromErrorFn<T, E, F>
): Result<T, F> {
    if (input.ok) {
        return input;
    }

    const fallback = recoverer(input.err);
    return fallback;
}
