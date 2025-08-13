import { type Result, createErr, createOk } from '../../plain_result/core/result.js';
import { type Undefinable, isNotUndefined } from '../core/undefinable.js';

/**
 * Transforms the `Undefinable<T>` into a `Result<T, E>` by mapping `T` to `Ok(T)`.
 * If `input` is `undefined`, then return `Err(E)` with passed `err`.
 *
 * Arguments passed to this are eagerly evaluated;
 * if you are passing the result of a function call, it is recommended to use okOrElse,
 * which is lazily evaluated.
 */
export function okOrForUndefinable<T, E>(input: Undefinable<T>, err: E): Result<T, E> {
    if (isNotUndefined(input)) {
        const okWrapped = createOk<T>(input);
        return okWrapped;
    }

    const errWrapped = createErr<E>(err);
    return errWrapped;
}
