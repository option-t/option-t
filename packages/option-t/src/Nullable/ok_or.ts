import { type Nullable, isNotNull } from './nullable_.js';
import { type Result, createErr, createOk } from '../PlainResult/result_.js';

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
        const v = createOk<T>(input);
        return v;
    }

    const e = createErr<E>(err);
    return e;
}
