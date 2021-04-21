import { Result, createOk, createErr, Ok, Err, isErr } from '../PlainResult/Result';
import { Option, isNone, createSome, createNone, None, Some } from './Option';

/**
 *  Transposes an `Option` of a `Result` into a `Result` of an `Option`.
 *
 *  - `Some(Ok(x))` -> `Ok(Some(x))`
 *  - `Some(Err(e))` -> `Err(e)`
 *  - `None` => `Ok(None)`
 */
export function transposeForOption<T, E>(input: Option<Result<T, E>>): Result<Option<T>, E> {
    if (isNone(input)) {
        const inner: None = createNone();
        const r: Ok<None> = createOk(inner);
        return r;
    }

    const inner: Result<T, E> = input.val;
    if (isErr(inner)) {
        const e: E = inner.err;
        const r: Err<E> = createErr(e);
        return r;
    }

    const innerInner: T = inner.val;
    const some: Some<T> = createSome(innerInner);
    const r: Ok<Some<T>> = createOk(some);
    return r;
}
