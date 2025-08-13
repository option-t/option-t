import type { RecoveryFn } from '../../internal/function.js';
import { type Result, createErr, createOk } from '../../plain_result/core/result.js';
import { type Maybe, isNotNullOrUndefined } from '../core/maybe.js';

/**
 * Transforms the `Maybe<T>` into a `Result<T, E>` by mapping `T` to `Ok(T)`.
 * If `input` is `undefined` or `null`, then returns `Err(E)` with the result of `recoverer()`
 */
export function okOrElseForMaybe<T, E>(input: Maybe<T>, recoverer: RecoveryFn<E>): Result<T, E> {
    if (isNotNullOrUndefined(input)) {
        const okWrapped = createOk<T>(input);
        return okWrapped;
    }

    const fallback: E = recoverer();
    const errWrapped = createErr<E>(fallback);
    return errWrapped;
}
