import { Option, createNone, createSome } from '../PlainOption/Option.ts';
import { Result } from './Result.ts';

/**
 *  Convert to `Some(T)` if _v_ is `Ok(T)`.
 *  Otherwise, return `None`.
 */
export function toOptionFromOk<T, E>(v: Result<T, E>): Option<T> {
    if (v.ok) {
        return createSome<T>(v.val);
    }
    else {
        return createNone();
    }
}

/**
 *  Convert to `Some(E)` if _v_ is `Err(E)`.
 *  Otherwise, return `None`.
 */
export function toOptionFromErr<T, E>(v: Result<T, E>): Option<E> {
    if (!v.ok) {
        return createSome<E>(v.err);
    }
    else {
        return createNone();
    }
}
