import { assertIsPromise } from '../internal/assert.js';
import {
    ERR_MSG_RECOVERER_MUST_RETURN_PROMISE,
    ERR_MSG_TRANSFORMER_MUST_RETURN_PROMISE,
} from '../internal/error_message.js';
import type { AsyncTransformFn, AsyncRecoveryFn } from '../internal/function.js';
import { type Option, isNone } from './option.js';
import { unwrapOption } from './unwrap.js';

/**
 *  Maps a `Option<T>` to `U` by applying _transformer_ to a contained `Some(T)` value in _input_,
 *  or a _recoverer_ function to a contained `None` value in _input_.
 *  This function can be used to unpack a successful result while handling an error.
 */
export function mapOrElseAsyncForOption<T, U>(
    input: Option<T>,
    recoverer: AsyncRecoveryFn<U>,
    transformer: AsyncTransformFn<T, U>
): Promise<U> {
    if (isNone(input)) {
        const fallback: Promise<U> = recoverer();
        // If this is async function, this always return Promise, but not.
        // We should check to clarify the error case if user call this function from plain js
        // and they mistake to use this.
        assertIsPromise(fallback, ERR_MSG_RECOVERER_MUST_RETURN_PROMISE);
        return fallback;
    }

    const inner: T = unwrapOption(input);
    const result: Promise<U> = transformer(inner);
    // If this is async function, this always return Promise, but not.
    // We should check to clarify the error case if user call this function from plain js
    // and they mistake to use this.
    assertIsPromise(result, ERR_MSG_TRANSFORMER_MUST_RETURN_PROMISE);
    return result;
}
