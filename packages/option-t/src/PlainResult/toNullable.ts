import type { Nullable } from '../Nullable/Nullable.js';
import type { Result } from './Result.js';
import { unwrapOrFromResult, unwrapErrOrFromResult } from './unwrapOr.js';

/**
 *  Unwrap `T` if _input_ is `Ok(T)`.
 *  Otherwise, return `null`.
 */
export function fromOkToNullable<T>(input: Result<T, unknown>): Nullable<T> {
    const val: Nullable<T> = unwrapOrFromResult<Nullable<T>>(input, null);
    return val;
}

/**
 *  Unwrap `E` if _input_ is `Err(E)`.
 *  Otherwise, return `null`.
 */
export function fromErrToNullable<E>(input: Result<unknown, E>): Nullable<E> {
    const err: Nullable<E> = unwrapErrOrFromResult<Nullable<E>>(input, null);
    return err;
}
