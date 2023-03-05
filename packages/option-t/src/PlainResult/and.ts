import type { Result } from './result.js';

/**
 *  Return _b_ if _a_ is `Ok(T)`.
 *  Otherwise, return _a_.
 */
export function andForResult<T, U, E>(a: Result<T, E>, b: Result<U, E>): Result<U, E> {
    if (a.ok) {
        return b;
    }

    return a;
}
