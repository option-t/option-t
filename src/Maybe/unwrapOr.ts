import { Maybe, isNotNullAndUndefined } from './Maybe';

export function unwrapOrFromMaybe<T>(v: Maybe<T>, def: T): T {
    return isNotNullAndUndefined(v) ? v : def;
}
