import { type Option, createNone, createSome } from '../PlainOption/Option.js';
import type { Result } from './Result.js';

/**
 *  Convert to `Some(T)` if _input_ is `Ok(T)`.
 *  Otherwise, return `None`.
 */
export function toOptionFromOk<T, E>(input: Result<T, E>): Option<T> {
    if (input.ok) {
        return createSome<T>(input.val);
    }

    return createNone();
}

/**
 *  Convert to `Some(E)` if _input_ is `Err(E)`.
 *  Otherwise, return `None`.
 */
export function toOptionFromErr<T, E>(input: Result<T, E>): Option<E> {
    if (!input.ok) {
        return createSome<E>(input.err);
    }

    return createNone();
}
