import type { Undefinable } from '../../undefinable/core/undefinable.js';
import type { Result } from '../core/result.js';
import { unwrapErrOrForResult } from '../internal/unwrap_err_or.js';
import { unwrapOrForResult } from './unwrap_or.js';

/**
 *  Unwrap `T` if _input_ is `Ok(T)`.
 *  Otherwise, return `undefined`.
 */
export function toUndefinableFromOk<T>(input: Result<T, unknown>): Undefinable<T> {
    const val: Undefinable<T> = unwrapOrForResult<Undefinable<T>>(input, undefined);
    return val;
}

/**
 *  Unwrap `E` if _input_ is `Err(E)`.
 *  Otherwise, return `undefined`.
 */
export function toUndefinableFromErr<E>(input: Result<unknown, E>): Undefinable<E> {
    const err: Undefinable<E> = unwrapErrOrForResult<Undefinable<E>>(input, undefined);
    return err;
}
