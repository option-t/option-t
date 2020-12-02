import { Result } from './Result';

/**
 *  Unwraps a result _v_, returns the content of an `Ok(T)`.
 *  If the value is an `Err(E)` then return _def_.
 */
export function unwrapOrFromResult<T>(v: Result<T, unknown>, def: T): T {
    return v.ok ? v.val : def;
}
