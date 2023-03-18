import type { AsyncTransformFn, AsyncRecoveryFn } from '../internal/function.js';
import { type Option, isNone } from './option.js';
import { unwrapOption } from './unwrap.js';

/**
 *  Maps a `Option<T>` to `U` by applying _transformer_ to a contained `Some(T)` value in _input_,
 *  or a _recoverer_ function to a contained `None` value in _input_.
 *  This function can be used to unpack a successful result while handling an error.
 */
export async function mapOrElseAsyncForOption<T, U>(
    input: Option<T>,
    recoverer: AsyncRecoveryFn<U>,
    transformer: AsyncTransformFn<T, U>
): Promise<U> {
    if (isNone(input)) {
        const fallback: U = await recoverer();
        return fallback;
    }

    const inner: T = unwrapOption(input);
    const result: U = await transformer(inner);
    return result;
}
