import { assertIsPromise } from '../internal/assert.js';
import { ERR_MSG_TRANSFORMER_MUST_RETURN_PROMISE } from '../internal/ErrorMessage.js';
import type { AsyncTransformFn } from '../internal/Function.js';
import { isErr, type Result } from './Result.js';
import { unwrapOkFromResult } from './unwrap.js';

/**
 *  Return the result of _transformer_ with using _input_ as an argument for it if _input_ is `Ok(T)`.
 *  Otherwise, return _defaultValue_.
 *
 *  Basically, this operation is a combination `mapAsync()` and `unwrapOr()`.
 */
export async function mapOrAsyncForResult<T, E, U>(
    input: Result<T, E>,
    defaultValue: U,
    transformer: AsyncTransformFn<T, U>
): Promise<U> {
    if (isErr(input)) {
        return defaultValue;
    }

    const source: T = unwrapOkFromResult(input);
    const result: Promise<U> = transformer(source);
    // If this is async function, this always return Promise, but not.
    // We should check to clarify the error case if user call this function from plain js
    // and they mistake to use this.
    assertIsPromise(result, ERR_MSG_TRANSFORMER_MUST_RETURN_PROMISE);
    return result;
}
