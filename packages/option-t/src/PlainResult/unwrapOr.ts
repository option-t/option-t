import { type Result, isOk } from './Result.js';

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

/**
 *  Unwraps a result _input_, returns the content of an `Err(E)`.
 *  If the value is an `Ok(T)` then return _defaultValue_.
 */
export function unwrapErrOrFromResult<E>(input: Result<unknown, E>, defaultValue: E): E {
    if (isOk(input)) {
        return defaultValue;
    }

    const val: E = input.err;
    return val;
}
