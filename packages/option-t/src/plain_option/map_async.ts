import type { AsyncTransformFn } from '../internal/function.js';

import { type Option, createSome, isNone } from './option.js';
import { unwrapOption } from './unwrap.js';

/**
 *  Maps a `Option<T>` to `Option<U>` by applying a _transformer_ function
 *  to an contained `Some(T)` value, leaving an `None` value untouched.
 *
 *  This function can be used to compose the results of two functions.
 */
export async function mapAsyncForOption<T, U>(
    input: Option<T>,
    transformer: AsyncTransformFn<T, U>
): Promise<Option<U>> {
    if (isNone(input)) {
        return input;
    }

    const inner: T = unwrapOption(input);
    const result: U = await transformer(inner);
    const wrapped: Option<U> = createSome(result);
    return wrapped;
}
