import { RecoveryFn } from '../utils/Function';
import { Nullable } from './Nullable';

export function unwrapOrElseFromNullable<T>(v: Nullable<T>, def: RecoveryFn<T>): T {
    return (v !== null) ? v : def();
}
