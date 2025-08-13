import type { AsyncRecoveryFn } from '../../internal/function.js';
import { type Result, createErr, createOk } from '../../plain_result/result.js';
import { type Undefinable, isNotUndefined } from '../core/undefinable.js';

/**
 * Transforms the `Undefinable<T>` into a `Result<T, E>` by mapping `T` to `Ok(T)`.
 * If `input` is `undefined`, then returns `Err(E)` with the result of `recoverer()`
 */
export async function okOrElseAsyncForUndefinable<T, E>(
    input: Undefinable<T>,
    recoverer: AsyncRecoveryFn<E>,
): Promise<Result<T, E>> {
    if (isNotUndefined(input)) {
        const okWrapped = createOk<T>(input);
        return okWrapped;
    }

    const fallback: E = await recoverer();
    const errWrapped = createErr<E>(fallback);
    return errWrapped;
}
