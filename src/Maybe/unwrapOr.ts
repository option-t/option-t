import { Maybe } from './Maybe';

export function unwrapOrFromMaybe<T>(v: Maybe<T>, def: T): T {
    return (v !== undefined && v !== null) ? v : def;
}
