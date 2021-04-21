import type { RecoveryFromErrorFn } from '../shared/Function';
import { Result } from './Result';

export type ResultTryRecoveryFromErrorFn<T, E, F> = RecoveryFromErrorFn<E, Result<T, F>>;

/**
 *  @deprecated Use ResultTryRecoveryFromErrorFn in the same module.
 */
export type FlatmapErrFn<T, E, F> = ResultTryRecoveryFromErrorFn<T, E, F>;

/**
 *  Calls _recoverer_  and return its returned value if the result is `Err(E)`,
 *  otherwise returns the `Ok(T)` value of self.
 *  This function can be used for control flow based on result values.
 */
export function orElseForResult<T, E, F>(
    a: Result<T, E>,
    recoverer: ResultTryRecoveryFromErrorFn<T, E, F>
): Result<T, F> {
    if (a.ok) {
        return a;
    } else {
        const r = recoverer(a.err);
        return r;
    }
}
