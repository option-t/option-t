import { Undefinable } from './Undefinable';

export function unwrapOrFromUndefinable<T>(v: Undefinable<T>, def: T): T {
    return (v !== undefined) ? v : def;
}
