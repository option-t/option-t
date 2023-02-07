import type { Nullable } from '../Nullable/Nullable.js';
import { unwrapErrOrFromResult } from './internal/unwrapErrOr.js';
import type { Result } from './Result.js';
import { unwrapOrFromResult } from './unwrapOr.js';

/**
 *  Unwrap `T` if _input_ is `Ok(T)`.
 *  Otherwise, return `null`.
 */
export function toNullableFromOk<T>(input: Result<T, unknown>): Nullable<T> {
    const val: Nullable<T> = unwrapOrFromResult<Nullable<T>>(input, null);
    return val;
}

/**
 *  Unwrap `E` if _input_ is `Err(E)`.
 *  Otherwise, return `null`.
 */
export function toNullableFromErr<E>(input: Result<unknown, E>): Nullable<E> {
    const err: Nullable<E> = unwrapErrOrFromResult<Nullable<E>>(input, null);
    return err;
}
