import type { RecoveryFn } from '../../internal/function.js';
import { type Result, createErr, createOk } from '../../plain_result/core/result.js';
import type { Option } from './option.js';

/**
 * Transforms the `Option<T>` into a `Result<T, E>`, mapping `Some(v)` to `Ok(v)` and `None` to `Err(err())`.
 */
export function okOrElseForPlainOption<T, E>(
    input: Option<T>,
    recoverer: RecoveryFn<E>,
): Result<T, E> {
    if (input.ok) {
        const okWrapped = createOk<T>(input.val);
        return okWrapped;
    }

    const fallback: E = recoverer();
    const errWrapped = createErr<E>(fallback);
    return errWrapped;
}
