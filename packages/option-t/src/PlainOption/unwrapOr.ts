import type { Option } from './Option.js';

/**
 *  Unwraps a result _input_, returns the content of an `Some(T)`.
 *  If the value is an `None` then return _defaultValue_.
 */
export function unwrapOrFromOption<T>(input: Option<T>, defaultValue: T): T {
    if (input.ok) {
        const val: T = input.val;
        return val;
    }

    return defaultValue;
}
