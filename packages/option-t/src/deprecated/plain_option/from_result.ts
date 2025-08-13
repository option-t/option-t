import { isErr, isOk, unwrapErr, unwrapOk, type Result } from '../../plain_result/core/result.js';
import { type Option, createNone, createSome } from './option.js';

/**
 *  Convert to `Some(T)` if _input_ is `Ok(T)`.
 *  Otherwise, return `None`.
 */
export function fromOkToOption<T, E>(input: Result<T, E>): Option<T> {
    if (isOk(input)) {
        const val: T = unwrapOk(input);
        return createSome<T>(val);
    }

    return createNone();
}

/**
 *  Convert to `Some(E)` if _input_ is `Err(E)`.
 *  Otherwise, return `None`.
 */
export function fromErrToOption<T, E>(input: Result<T, E>): Option<E> {
    if (isErr(input)) {
        const err: E = unwrapErr(input);
        return createSome<E>(err);
    }

    return createNone();
}
