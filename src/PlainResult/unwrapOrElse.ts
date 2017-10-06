import { RecoveryWithErrorFn } from '../utils/Function';
import { Result, isOk } from './Result';

export function unwrapOrElseFromResult<T, E>(v: Result<T, E>, def: RecoveryWithErrorFn<E, T>): T {
    return isOk(v) ? v.val: def(v.err);
}
