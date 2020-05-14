import { Result } from './Result.ts';

/**
 *  Return _b_ if _a_ is `Ok(T)`.
 *  Otherwise, return _a_.
 */
export function andForResult<T, U, E>(a: Result<T, E>, b: Result<U, E>): Result<U, E> {
    return a.ok ? b : a;
}
