import { expectNotUndefined } from './expect';
import { Undefinable } from './Undefinable';

export function unwrapUndefinable<T>(v: Undefinable<T>): T | never {
    return expectNotUndefined(v, 'called with `undefined`');
}
