import { type Nullable, isNull } from '../nullable/nullable.js';
import { type Option, createSome, createNone, isNone, type Some } from '../plain_option/option.js';
import { isUndefined, type Undefinable } from '../undefinable/undefinable.js';
import { type Result, type Ok, type Err, isErr, createOk, createErr, unwrapOk } from './result.js';

/**
 *  Transposes a `Result` of an `Option` into an `Option` of a `Result`.
 *
 *  - `Ok(Some(v))` -> `Some(Ok(v))`
 *  - `Ok(None)` -> `None`
 *  - `Err(e)` -> `Some(Err(e))`
 */
export function transposeForResult<T, E>(input: Result<Option<T>, E>): Option<Result<T, E>> {
    if (isErr(input)) {
        const err: E = input.err;
        const newErr: Err<E> = createErr(err);
        const result: Some<Err<E>> = createSome<Err<E>>(newErr);
        return result;
    }

    const inner: Option<T> = input.val;
    if (isNone(inner)) {
        const result = createNone();
        return result;
    }

    const innerInner: T = inner.val;
    const innerV: Ok<T> = createOk(innerInner);
    const result: Option<Ok<T>> = createSome(innerV);
    return result;
}

/**
 *  Transposes a `Result` of an `Nullable<T>` into an `Nullable<T>` of a `Result`.
 *
 *  - `Ok(T)` -> `Ok(T)`
 *  - `Ok(null)` -> `null`
 *  - `Err(E)` -> `Err(E)`
 */
export function transposeNullableForResult<T, E>(
    input: Result<Nullable<T>, E>,
): Nullable<Result<T, E>> {
    if (isErr(input)) {
        return input;
    }

    const inner: Nullable<T> = unwrapOk(input);
    if (isNull(inner)) {
        return null;
    }

    return createOk<T>(inner);
}

/**
 *  Transposes a `Result` of an `Undefinable<T>` into an `Undefinable<T>` of a `Result`.
 *
 *  - `Ok(T)` -> `Ok(T)`
 *  - `Ok(undefined)` -> `undefined`
 *  - `Err(E)` -> `Err(E)`
 */
export function transposeUndefinableForResult<T, E>(
    input: Result<Undefinable<T>, E>,
): Undefinable<Result<T, E>> {
    if (isErr(input)) {
        return input;
    }

    const inner: Undefinable<T> = unwrapOk(input);
    if (isUndefined(inner)) {
        return undefined;
    }

    return createOk<T>(inner);
}
