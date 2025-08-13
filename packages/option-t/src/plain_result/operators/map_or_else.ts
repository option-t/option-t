import type { TransformFn, RecoveryFromErrorFn } from '../../internal/function.js';
import { isOk, type Result } from '../core/result.js';
import {
    unsafeUnwrapValueInErrWithoutAnyCheck,
    unsafeUnwrapValueInOkWithoutAnyCheck,
} from '../internal/intrinsics_unsafe.js';

/**
 *  Maps a `Result<T, E>` to `U` by applying _transformer_ to a contained `Ok(T)` value in _input_,
 *  or a _recoverer_ function to a contained `Err(E)` value in _input_.
 *  This function can be used to unpack a successful result while handling an error.
 */
export function mapOrElseForResult<T, E, U>(
    input: Result<T, E>,
    recoverer: RecoveryFromErrorFn<E, U>,
    transformer: TransformFn<T, U>,
): U {
    if (isOk(input)) {
        const val = unsafeUnwrapValueInOkWithoutAnyCheck(input);
        const result: U = transformer(val);
        return result;
    }

    const err = unsafeUnwrapValueInErrWithoutAnyCheck(input);
    const fallback: U = recoverer(err);
    return fallback;
}
