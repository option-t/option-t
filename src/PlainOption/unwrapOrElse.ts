import { RecoveryFn } from '../shared/Function';
import { Option } from './Option';

/**
 *  Unwraps a result _v_, returns the content of an `Some(T)`.
 *  If the value is an `None` then it calls `def` with its value.
 */
export function unwrapOrElseFromOption<T>(v: Option<T>, def: RecoveryFn<T>): T {
    return v.ok ? v.val : def();
}
