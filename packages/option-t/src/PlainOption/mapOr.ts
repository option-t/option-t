import type { Option } from './Option.js';
import type { TransformFn } from '../internal/function.js';

/**
 *  Return the result of _transformer_ with using _input_ as an argument for it if _input_ is `Some(T)`.
 *  Otherwise, return _defaultValue_.
 *
 *  Basically, this operation is a combination `map()` and `unwrapOr()`.
 */
export function mapOrForOption<T, U>(
    input: Option<T>,
    defaultValue: U,
    transformer: TransformFn<T, U>
): U {
    if (!input.ok) {
        return defaultValue;
    }

    const result: U = transformer(input.val);
    return result;
}
