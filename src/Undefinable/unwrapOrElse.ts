import { Undefinable, isNotUndefined } from './Undefinable';
import { RecoveryFn } from './Function';

export function unwrapOrElseFromUndefinable<T>(v: Undefinable<T>, def:  RecoveryFn<T>): T {
    return isNotUndefined(v) ? v : def();
}

