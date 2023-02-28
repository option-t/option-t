import { type Undefinable, isNotUndefined } from './Undefinable.js';
import { type Result, createErr, createOk } from '../PlainResult/Result.js';
import type { RecoveryFn } from '../internal/Function.js';

/**
 * Transforms the `Undefinable<T>` into a `Result<T, E>` by mapping `T` to `Ok(T)`.
 * If `input` is `undefined`, then returns `Err(E)` with the result of `recoverer()`
 */
export function okOrElseForUndefinable<T, E>(
    input: Undefinable<T>,
    recoverer: RecoveryFn<E>
): Result<T, E> {
    if (isNotUndefined(input)) {
        const v = createOk<T>(input);
        return v;
    }

    const e: E = recoverer();
    const v = createErr<E>(e);
    return v;
}
