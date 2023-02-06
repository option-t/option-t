import { assertIsPromise } from '../internal/assert.js';
import { ERR_MSG_TRANSFORMER_MUST_RETURN_PROMISE } from '../internal/ErrorMessage.js';
import type { AsyncTransformFn } from '../internal/Function.js';
import { Option, isNone } from './Option.js';
import { unwrapOption } from './unwrap.js';

export type OptionAsyncTryTransformFn<T, U> = AsyncTransformFn<T, Option<U>>;

/**
 *  Returns `None` if the _input_ is `None`,
 *  otherwise calls _transformer_ with the value and returns the result.
 *
 *  XXX:
 *  Some languages call this operation flatmap.
 *  But we don't provide `flatMap()` as alias of this function
 *  to sort with other APIs.
 */
export function andThenAsyncForOption<T, U>(
    input: Option<T>,
    transformer: OptionAsyncTryTransformFn<T, U>
): Promise<Option<U>> {
    if (isNone(input)) {
        return Promise.resolve(input);
    }

    const inner: T = unwrapOption(input);
    const result = transformer(inner);

    // If this is async function, this always return Promise, but not.
    // We should check to clarify the error case if user call this function from plain js
    // and they mistake to use this.
    assertIsPromise(result, ERR_MSG_TRANSFORMER_MUST_RETURN_PROMISE);
    return result;
}
