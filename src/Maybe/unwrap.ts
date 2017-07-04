import { expectNotNullAndUndefined } from './expect';
import { Maybe } from './Maybe';

export function unwrapMaybe<T>(v: Maybe<T>): T | never {
    return expectNotNullAndUndefined(v, 'called with `null` or `undefined`');
}
