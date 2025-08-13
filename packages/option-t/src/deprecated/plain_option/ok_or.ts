import { type Result, createErr, createOk } from '../../plain_result/core/result.js';
import type { Option } from './option.js';

/**
 * Transforms the `Option<T>` into a `Result<T, E>`,
 * mapping `Some(v)` to `Ok(v)` and None to Err(err).
 *
 * Arguments passed to this are eagerly evaluated;
 * if you are passing the result of a function call, it is recommended to use okOrElse, which is lazily evaluated.
 */
export function okOrForPlainOption<T, E>(input: Option<T>, err: E): Result<T, E> {
    if (input.ok) {
        const okWrapped = createOk<T>(input.val);
        return okWrapped;
    }

    const errWrapped = createErr<E>(err);
    return errWrapped;
}
