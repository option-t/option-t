import { Nullable, isNotNull } from './Nullable';

export function unwrapOrFromNullable<T>(v: Nullable<T>, def: T): T {
    return isNotNull(v) ? v : def;
}