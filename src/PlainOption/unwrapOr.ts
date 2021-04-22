import { Option } from './Option';

/**
 *  Unwraps a result _input_, returns the content of an `Some(T)`.
 *  If the value is an `None` then return _defaultValue_.
 */
export function unwrapOrFromOption<T>(input: Option<T>, defaultValue: T): T {
    return input.ok ? input.val : defaultValue;
}
