import {
    type Result,
    createOk,
    createErr,
    type Ok,
    type Err,
    isErr,
} from '../PlainResult/result.js';
import { type Option, isNone, createSome, createNone, type None, type Some } from './option.js';

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
        const result: Ok<None> = createOk(inner);
        return result;
    }

    const inner: Result<T, E> = input.val;
    if (isErr(inner)) {
        const e: E = inner.err;
        const result: Err<E> = createErr(e);
        return result;
    }

    const innerInner: T = inner.val;
    const some: Some<T> = createSome(innerInner);
    const result: Ok<Some<T>> = createOk(some);
    return result;
}
