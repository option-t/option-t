import { RecoveryFromErrorFn } from '../shared/Function';
import { Result } from './Result';

/**
 *  Unwraps a result _v_, returns the content of an `Ok(T)`.
 *  If the value is an `Err(E)` then it calls `def` with its value.
 */
export function unwrapOrElseFromResult<T, E>(v: Result<T, E>, def: RecoveryFromErrorFn<E, T>): T {
    return v.ok ? v.val : def(v.err);
}
