import { Result } from './Result';

/**
 *  Unwraps a result _input_, returns the content of an `Ok(T)`.
 *  If the value is an `Err(E)` then return _defaultValue_.
 */
export function unwrapOrFromResult<T>(input: Result<T, unknown>, defaultValue: T): T {
    if (input.ok) {
        const val: T = input.val;
        return val;
    }

    return defaultValue;
}
