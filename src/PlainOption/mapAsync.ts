import { assertIsPromise } from '../internal/assert';
import { ERR_MSG_TRANSFORMER_MUST_RETURN_PROMISE } from '../internal/ErrorMessage';
import type { AsyncTransformFn } from '../internal/Function';

import { Option, createSome, isNone } from './Option';
import { unwrapOption } from './unwrap';

/**
 *  Maps a `Option<T>` to `Option<U>` by applying a _transformer_ function
 *  to an contained `Some(T)` value, leaving an `None` value untouched.
 *
 *  This function can be used to compose the results of two functions.
 */
export function mapAsyncForOption<T, U>(
    input: Option<T>,
    transformer: AsyncTransformFn<T, U>
): Promise<Option<U>> {
    if (isNone(input)) {
        return Promise.resolve(input);
    }

    const inner = unwrapOption(input);
    const result: Promise<U> = transformer(inner);

    // If this is async function, this always return Promise, but not.
    // We should check to clarify the error case if user call this function from plain js
    // and they mistake to use this.
    assertIsPromise(result, ERR_MSG_TRANSFORMER_MUST_RETURN_PROMISE);

    const wrapped: Promise<Option<U>> = result.then(createSome);
    return wrapped;
}
