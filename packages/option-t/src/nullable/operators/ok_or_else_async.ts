import type { AsyncRecoveryFn } from '../../internal/function.js';

import { type Result, createErr, createOk } from '../../plain_result/core/result.js';
import { type Nullable, isNotNull } from '../core/nullable.js';

/**
 * Transforms the `Nullable<T>` into a `Result<T, E>` by mapping `T` to `Ok(T)`.
 * If `input` is `null`, then returns `Err(E)` with the result of `recoverer()`
 */
export async function okOrElseAsyncForNullable<T, E>(
    input: Nullable<T>,
    recoverer: AsyncRecoveryFn<E>,
): Promise<Result<T, E>> {
    if (isNotNull(input)) {
        const okWrapped = createOk<T>(input);
        return okWrapped;
    }

    const fallback: E = await recoverer();
    const errWrapped = createErr<E>(fallback);
    return errWrapped;
}
