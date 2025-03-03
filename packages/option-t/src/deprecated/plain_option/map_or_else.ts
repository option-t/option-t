import type { TransformFn, RecoveryFn } from '../../internal/function.js';
import type { Option } from './option.js';

/**
 *  Maps a `Option<T>` to `U` by applying _transformer_ to a contained `Some(T)` value in _input_,
 *  or a _recoverer_ function to a contained `None` value in _input_.
 *  This function can be used to unpack a successful result while handling an error.
 */
export function mapOrElseForOption<T, U>(
    input: Option<T>,
    recoverer: RecoveryFn<U>,
    transformer: TransformFn<T, U>,
): U {
    if (!input.ok) {
        const fallback = recoverer();
        return fallback;
    }

    const result = transformer(input.val);
    return result;
}
