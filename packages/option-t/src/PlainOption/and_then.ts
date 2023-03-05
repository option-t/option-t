import type { TransformFn } from '../internal/function.js';
import type { Option } from './option_.js';

export type OptionTryTransformFn<in T, out U> = TransformFn<T, Option<U>>;

/**
 *  Returns `None` if the _input_ is `None`,
 *  otherwise calls _transformer_ with the value and returns the result.
 *
 *  XXX:
 *  Some languages call this operation flatmap.
 *  But we don't provide `flatMap()` as alias of this function
 *  to sort with other APIs.
 */
export function andThenForOption<T, U>(
    input: Option<T>,
    transformer: OptionTryTransformFn<T, U>
): Option<U> {
    if (!input.ok) {
        return input;
    }

    const result = transformer(input.val);
    return result;
}
