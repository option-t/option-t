import { type Nullable, isNotNull } from './Nullable.js';
import { type Result, createErr, createOk } from '../PlainResult/Result.js';
import type { RecoveryFn } from '../internal/function.js';

/**
 * Transforms the `Nullable<T>` into a `Result<T, E>` by mapping `T` to `Ok(T)`.
 * If `input` is `null`, then returns `Err(E)` with the result of `recoverer()`
 */
export function okOrElseForNullable<T, E>(
    input: Nullable<T>,
    recoverer: RecoveryFn<E>
): Result<T, E> {
    if (isNotNull(input)) {
        const v = createOk<T>(input);
        return v;
    }

    const e: E = recoverer();
    const v = createErr<E>(e);
    return v;
}
