import { RecoveryFn } from '../utils/Function';
import { Nullable, isNotNull } from './Nullable';

export function unwrapOrElseFromNullable<T>(v: Nullable<T>, def:  RecoveryFn<T>): T {
    return isNotNull(v) ? v : def();
}
