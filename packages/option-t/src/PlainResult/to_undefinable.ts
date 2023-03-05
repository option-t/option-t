import type { Undefinable } from '../Undefinable/undefinable_.js';
import { unwrapErrOrFromResult } from './internal/unwrap_err_or.js';
import type { Result } from './result_.js';
import { unwrapOrFromResult } from './unwrap_or.js';

/**
 *  Unwrap `T` if _input_ is `Ok(T)`.
 *  Otherwise, return `undefined`.
 */
export function toUndefinableFromOk<T>(input: Result<T, unknown>): Undefinable<T> {
    const val: Undefinable<T> = unwrapOrFromResult<Undefinable<T>>(input, undefined);
    return val;
}

/**
 *  Unwrap `E` if _input_ is `Err(E)`.
 *  Otherwise, return `undefined`.
 */
export function toUndefinableFromErr<E>(input: Result<unknown, E>): Undefinable<E> {
    const err: Undefinable<E> = unwrapErrOrFromResult<Undefinable<E>>(input, undefined);
    return err;
}
