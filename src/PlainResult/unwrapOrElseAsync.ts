import { RecoveryWithErrorFn } from '../shared/Function';
import { Result, isOk } from './Result';
import { unwrapFromResult, unwrapErrFromResult } from './unwrap';

/**
 *  Unwraps a result _v_, returns the content of an `Ok(T)`.
 *  If the value is an `Err(E)` then it calls `def` with its value.
 */
export function unwrapOrElseAsyncFromResult<T, E>(
    src: Result<T, E>,
    def: RecoveryWithErrorFn<E, Promise<T>>
): Promise<T> {
    if (isOk(src)) {
        const value = unwrapFromResult(src);
        return Promise.resolve(value);
    }

    const error: E = unwrapErrFromResult(src);
    const result: Promise<T> = def(error);
    return result;
}
