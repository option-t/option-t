import { expectNotNull } from './expect';
import { Nullable } from './Nullable';

export function unwrapNullable<T>(v: Nullable<T>): T | never {
    return expectNotNull(v, 'called with `null`');
}