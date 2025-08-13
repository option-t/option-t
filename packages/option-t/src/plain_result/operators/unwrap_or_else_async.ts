import type { AsyncRecoveryFromErrorFn } from '../../internal/function.js';
import { type Result, isOk } from '../core/result.js';
import {
    unsafeUnwrapValueInErrWithoutAnyCheck,
    unsafeUnwrapValueInOkWithoutAnyCheck,
} from '../internal/intrinsics_unsafe.js';

/**
 *  Unwraps _input_, returns the content of an `Ok(T)`.
 *  If the value is an `Err(E)` then it calls `recoverer` with its value.
 */
export async function unwrapOrElseAsyncForResult<T, E>(
    input: Result<T, E>,
    recoverer: AsyncRecoveryFromErrorFn<E, T>,
): Promise<T> {
    if (isOk(input)) {
        const value: T = unsafeUnwrapValueInOkWithoutAnyCheck(input);
        return value;
    }

    const error: E = unsafeUnwrapValueInErrWithoutAnyCheck(input);
    const defaultValue: T = await recoverer(error);
    return defaultValue;
}
