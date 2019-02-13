import { RecoveryFn } from '../shared/Function';
import { Option } from './Option';

export function unwrapOrElseFromOption<T>(v: Option<T>, def: RecoveryFn<T>): T {
    return v.ok ? v.val : def();
}
