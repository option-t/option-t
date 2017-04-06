import { Undefinable, isNotUndefined } from './Undefinable';

export function unwrapOrFromUndefinable<T>(v: Undefinable<T>, def: T): T {
    return isNotUndefined(v) ? v : def;
}
