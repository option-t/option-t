import { Option, createSome, createNone, isNone, Some } from '../PlainOption/Option.ts';
import { Result, Ok, Err, isErr, createOk, createErr } from './Result.ts';

/**
 *  Transposes a `Result` of an `Option` into an `Option` of a `Result`.
 *
 *  - `Ok(Some(v))` -> `Some(Ok(v))`
 *  - `Ok(None)` -> `None`
 *  - `Err(e)` -> `Some(Err(e))`
 */
export function transposeForResult<T, E>(self: Result<Option<T>, E>): Option<Result<T, E>> {
    if (isErr(self)) {
        const e: E = self.err;
        const newErr: Err<E> = createErr(e);
        const r: Some<Err<E>> = createSome<Err<E>>(newErr);
        return r;
    }

    const inner: Option<T> = self.val;
    if (isNone(inner)) {
        const r = createNone();
        return r;
    }

    const v: T = inner.val;
    const innerV: Ok<T> = createOk(v);
    const r: Option<Ok<T>> = createSome(innerV);
    return r;
}
