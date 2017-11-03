import { Undefinable } from './Undefinable';
import { RecoveryFn } from '../utils/Function';

export function unwrapOrElseFromUndefinable<T>(v: Undefinable<T>, def:  RecoveryFn<T>): T {
    return (v !== undefined) ? v : def();
}

