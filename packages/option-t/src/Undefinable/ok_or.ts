import { type Undefinable, isNotUndefined } from './undefinable.js';
import { type Result, createErr, createOk } from '../PlainResult/result.js';

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
        const v = createOk<T>(input);
        return v;
    }

    const e = createErr<E>(err);
    return e;
}
