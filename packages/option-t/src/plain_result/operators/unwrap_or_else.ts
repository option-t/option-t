import type { RecoveryFromErrorFn } from '../../internal/function.js';
import { isOk, type Result } from '../core/result.js';
import {
    unsafeUnwrapValueInErrWithoutAnyCheck,
    unsafeUnwrapValueInOkWithoutAnyCheck,
} from '../internal/intrinsics_unsafe.js';

/**
 *  Unwraps a result _input_, returns the content of an `Ok(T)`.
 *  If the value is an `Err(E)` then it calls `def` with its value.
 */
export function unwrapOrElseForResult<T, E>(
    input: Result<T, E>,
    recoverer: RecoveryFromErrorFn<E, T>,
): T {
    if (isOk(input)) {
        const val: T = unsafeUnwrapValueInOkWithoutAnyCheck(input);
        return val;
    }

    const err: E = unsafeUnwrapValueInErrWithoutAnyCheck(input);
    const fallback: T = recoverer(err);
    return fallback;
}
