import { type Maybe, isNotNullOrUndefined } from './Maybe.js';
import { type Result, createErr, createOk } from '../PlainResult/Result.js';

/**
 * Transforms the `Maybe<T>` into a `Result<T, E>` by mapping `T` to `Ok(T)`.
 * If `input` is `undefined` or `null`, then return `Err(E)` with passed `err`.
 *
 * Arguments passed to this are eagerly evaluated;
 * if you are passing the result of a function call, it is recommended to use okOrElse,
 * which is lazily evaluated.
 */
export function okOrForMaybe<T, E>(input: Maybe<T>, err: E): Result<T, E> {
    if (isNotNullOrUndefined(input)) {
        const v = createOk<T>(input);
        return v;
    }

    const e = createErr<E>(err);
    return e;
}
