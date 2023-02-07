import type { Undefinable } from '../Undefinable/Undefinable.js';
import { unwrapErrOrFromResult } from './internal/unwrapErrOr.js';
import type { Result } from './Result.js';
import { unwrapOrFromResult } from './unwrapOr.js';

/**
 *  Unwrap `T` if _input_ is `Ok(T)`.
 *  Otherwise, return `undefined`.
 */
export function fromOkToUndefinable<T>(input: Result<T, unknown>): Undefinable<T> {
    const val: Undefinable<T> = unwrapOrFromResult<Undefinable<T>>(input, undefined);
    return val;
}

/**
 *  Unwrap `E` if _input_ is `Err(E)`.
 *  Otherwise, return `undefined`.
 */
export function fromErrToUndefinable<E>(input: Result<unknown, E>): Undefinable<E> {
    const err: Undefinable<E> = unwrapErrOrFromResult<Undefinable<E>>(input, undefined);
    return err;
}
