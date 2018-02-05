import { RecoveryWithErrorFn } from '../shared/Function';
import { Result } from './Result';

export function unwrapOrElseFromResult<T, E>(v: Result<T, E>, def: RecoveryWithErrorFn<E, T>): T {
    return v.ok ? v.val: def(v.err);
}
