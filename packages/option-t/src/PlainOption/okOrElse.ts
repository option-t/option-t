import type { Option } from './Option.js';
import { type Result, createErr, createOk } from '../PlainResult/Result.js';
import type { RecoveryFn } from '../internal/Function.js';

/**
 * Transforms the `Option<T>` into a `Result<T, E>`, mapping `Some(v)` to `Ok(v)` and `None` to `Err(err())`.
 */
export function okOrElseForPlainOption<T, E>(
    input: Option<T>,
    recoverer: RecoveryFn<E>
): Result<T, E> {
    if (input.ok) {
        const v = createOk<T>(input.val);
        return v;
    }

    const e: E = recoverer();
    const v = createErr<E>(e);
    return v;
}
