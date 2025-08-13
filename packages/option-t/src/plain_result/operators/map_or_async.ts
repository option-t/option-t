import type { AsyncTransformFn } from '../../internal/function.js';
import { isErr, type Result } from '../core/result.js';
import { unsafeUnwrapValueInOkWithoutAnyCheck } from '../internal/intrinsics_unsafe.js';

/**
 *  Return the result of _transformer_ with using _input_ as an argument for it if _input_ is `Ok(T)`.
 *  Otherwise, return _defaultValue_.
 *
 *  Basically, this operation is a combination `mapAsync()` and `unwrapOr()`.
 */
export async function mapOrAsyncForResult<T, E, U>(
    input: Result<T, E>,
    defaultValue: U,
    transformer: AsyncTransformFn<T, U>,
): Promise<U> {
    if (isErr(input)) {
        return defaultValue;
    }

    const source: T = unsafeUnwrapValueInOkWithoutAnyCheck(input);
    const result: U = await transformer(source);
    return result;
}
