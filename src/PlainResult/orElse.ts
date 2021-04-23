import type { RecoveryFromErrorFn } from '../shared/Function';
import { Result } from './Result';

export type ResultTryRecoveryFromErrorFn<T, E, F> = RecoveryFromErrorFn<E, Result<T, F>>;

/**
 *  @deprecated Use ResultTryRecoveryFromErrorFn in the same module.
 */
export type FlatmapErrFn<T, E, F> = ResultTryRecoveryFromErrorFn<T, E, F>;

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
    } else {
        const r = recoverer(input.err);
        return r;
    }
}
