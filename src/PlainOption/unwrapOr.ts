import { Option } from './Option.ts';

/**
 *  Unwraps a result _v_, returns the content of an `Some(T)`.
 *  If the value is an `None` then return _def_.
 */
export function unwrapOrFromOption<T>(v: Option<T>, def: T): T {
    return v.ok ? v.val : def;
}
