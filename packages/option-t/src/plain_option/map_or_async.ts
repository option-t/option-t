import type { AsyncTransformFn } from '../internal/function.js';
import { type Option, isNone } from './option.js';
import { unwrapOption } from './unwrap.js';

/**
 *  Return the result of _transformer_ with using _input_ as an argument for it if _input_ is `Some(T)`.
 *  Otherwise, return _defaultValue_.
 *
 *  Basically, this operation is a combination `map()` and `unwrapOr()`.
 */
export async function mapOrAsyncForOption<T, U>(
    input: Option<T>,
    defaultValue: U,
    transformer: AsyncTransformFn<T, U>
): Promise<U> {
    if (isNone(input)) {
        return defaultValue;
    }

    const inner: T = unwrapOption(input);
    const result: U = await transformer(inner);
    return result;
}
