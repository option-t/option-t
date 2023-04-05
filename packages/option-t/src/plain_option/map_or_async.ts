import { assertIsPromise } from '../internal/assert.js';
import { ERR_MSG_TRANSFORMER_MUST_RETURN_PROMISE } from '../internal/error_message.js';
import type { AsyncTransformFn } from '../internal/function.js';
import { type Option, isNone, unwrapSome } from './option.js';

/**
 *  Return the result of _transformer_ with using _input_ as an argument for it if _input_ is `Some(T)`.
 *  Otherwise, return _defaultValue_.
 *
 *  Basically, this operation is a combination `map()` and `unwrapOr()`.
 */
export function mapOrAsyncForOption<T, U>(
    input: Option<T>,
    defaultValue: U,
    transformer: AsyncTransformFn<T, U>
): Promise<U> {
    if (isNone(input)) {
        return Promise.resolve(defaultValue);
    }

    const inner: T = unwrapSome(input);
    const result = transformer(inner);
    // If this is async function, this always return Promise, but not.
    // We should check to clarify the error case if user call this function from plain js
    // and they mistake to use this.
    assertIsPromise(result, ERR_MSG_TRANSFORMER_MUST_RETURN_PROMISE);
    return result;
}
