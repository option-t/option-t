import { Result, createOk, createErr, Ok, Err, isErr } from '../PlainResult/Result.ts';
import { Option, isNone, createSome, createNone, None, Some } from './Option.ts';

/**
 *  Transposes an `Option` of a `Result` into a `Result` of an `Option`.
 *
 *  - `Some(Ok(x))` -> `Ok(Some(x))`
 *  - `Some(Err(e))` -> `Err(e)`
 *  - `None` => `Ok(None)`
 */
export function transposeForOption<T, E>(self: Option<Result<T, E>>): Result<Option<T>, E> {
    if (isNone(self)) {
        const inner: None = createNone();
        const r: Ok<None> = createOk(inner);
        return r;
    }

    const inner: Result<T, E> = self.val;
    if (isErr(inner)) {
        const e: E = inner.err;
        const r: Err<E> = createErr(e);
        return r;
    }

    const v: T = inner.val;
    const some: Some<T> = createSome(v);
    const r: Ok<Some<T>> = createOk(some);
    return r;
}
