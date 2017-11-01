import { Nullable } from './Nullable';

export function unwrapOrFromNullable<T>(v: Nullable<T>, def: T): T {
    return (v !== null) ? v : def;
}
