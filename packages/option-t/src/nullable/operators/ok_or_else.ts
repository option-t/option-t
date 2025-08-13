import type { RecoveryFn } from '../../internal/function.js';
import { type Result, createErr, createOk } from '../../plain_result/result.js';
import { type Nullable, isNotNull } from '../core/nullable.js';

/**
 * Transforms the `Nullable<T>` into a `Result<T, E>` by mapping `T` to `Ok(T)`.
 * If `input` is `null`, then returns `Err(E)` with the result of `recoverer()`
 */
export function okOrElseForNullable<T, E>(
    input: Nullable<T>,
    recoverer: RecoveryFn<E>,
): Result<T, E> {
    if (isNotNull(input)) {
        const okWrapped = createOk<T>(input);
        return okWrapped;
    }

    const fallback: E = recoverer();
    const errWrapped = createErr<E>(fallback);
    return errWrapped;
}
