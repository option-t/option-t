import { isOk, type Result } from '../core/result.js';
import { unsafeUnwrapValueInOkWithoutAnyCheck } from '../internal/intrinsics_unsafe.js';

/**
 *  Unwraps a result _input_, returns the content of an `Ok(T)`.
 *  If the value is an `Err(E)` then return _defaultValue_.
 */
export function unwrapOrForResult<T>(input: Result<T, unknown>, defaultValue: T): T {
    if (isOk(input)) {
        const val: T = unsafeUnwrapValueInOkWithoutAnyCheck(input);
        return val;
    }

    return defaultValue;
}
