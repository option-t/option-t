import type { AsyncRecoveryFn } from '../../internal/function.js';

import { type Result, createErr, createOk } from '../../plain_result/result.js';
import { type Maybe, isNotNullOrUndefined } from '../core/maybe.js';

/**
 * Transforms the `Maybe<T>` into a `Result<T, E>` by mapping `T` to `Ok(T)`.
 * If `input` is `undefined` or `null`, then returns `Err(E)` with the result of `recoverer()`
 */
export async function okOrElseAsyncForMaybe<T, E>(
    input: Maybe<T>,
    recoverer: AsyncRecoveryFn<E>,
): Promise<Result<T, E>> {
    if (isNotNullOrUndefined(input)) {
        const okWrapped = createOk<T>(input);
        return okWrapped;
    }

    const fallback: E = await recoverer();
    const errWrapped = createErr<E>(fallback);
    return errWrapped;
}
