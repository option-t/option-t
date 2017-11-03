import { Result } from './Result';

export function unwrapOrFromResult<T, E>(v: Result<T, E>, def: T): T {
    return v.ok ? v.val : def;
}
