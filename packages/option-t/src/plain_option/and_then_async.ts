import type { AsyncTransformFn } from '../internal/function.js';
import { type Option, isNone } from './option.js';
import { unwrapOption } from './unwrap.js';

export type OptionAsyncTryTransformFn<in T, out U> = AsyncTransformFn<T, Option<U>>;

/**
 *  Returns `None` if the _input_ is `None`,
 *  otherwise calls _transformer_ with the value and returns the result.
 *
 *  XXX:
 *  Some languages call this operation flatmap.
 *  But we don't provide `flatMap()` as alias of this function
 *  to sort with other APIs.
 */
export async function andThenAsyncForOption<T, U>(
    input: Option<T>,
    transformer: OptionAsyncTryTransformFn<T, U>
): Promise<Option<U>> {
    if (isNone(input)) {
        return input;
    }

    const inner: T = unwrapOption(input);
    const result: Option<U> = await transformer(inner);
    return result;
}
