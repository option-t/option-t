import { type Result, createErr, createOk } from '../plain_result/result.js';
import { type Nullable, isNotNull } from './nullable.js';

/**
 * Transforms the `Nullable<T>` into a `Result<T, E>` by mapping `T` to `Ok(T)`.
 * If `input` is `null`, then return `Err(E)` with passed `err`.
 *
 * Arguments passed to this are eagerly evaluated;
 * if you are passing the result of a function call, it is recommended to use okOrElse,
 * which is lazily evaluated.
 */
export function okOrForNullable<T, E>(input: Nullable<T>, err: E): Result<T, E> {
    if (isNotNull(input)) {
        const okWrapped = createOk<T>(input);
        return okWrapped;
    }

    const errWrapped = createErr<E>(err);
    return errWrapped;
}
