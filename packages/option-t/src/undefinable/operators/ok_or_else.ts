import type { RecoveryFn } from '../../internal/function.js';
import { type Result, createErr, createOk } from '../../plain_result/core/result.js';
import { type Undefinable, isNotUndefined } from '../core/undefinable.js';

/**
 * Transforms the `Undefinable<T>` into a `Result<T, E>` by mapping `T` to `Ok(T)`.
 * If `input` is `undefined`, then returns `Err(E)` with the result of `recoverer()`
 */
export function okOrElseForUndefinable<T, E>(
    input: Undefinable<T>,
    recoverer: RecoveryFn<E>,
): Result<T, E> {
    if (isNotUndefined(input)) {
        const okWrapped = createOk<T>(input);
        return okWrapped;
    }

    const fallback: E = recoverer();
    const errWrapped = createErr<E>(fallback);
    return errWrapped;
}
