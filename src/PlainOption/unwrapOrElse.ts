import { RecoveryFn } from './Function';
import { Option, isSome } from './Option';

export function unwrapOrElseFromOption<T>(v: Option<T>, def:  RecoveryFn<T>): T {
    return isSome(v) ? v.val: def();
}
