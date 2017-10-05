import { Result, isOk } from './Result';

export function unwrapOrFromResult<T, E>(v: Result<T, E>, def: T): T {
    return isOk(v) ? v.val : def;
}
