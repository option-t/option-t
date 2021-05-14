import { Result } from './Result';
import { TransformFn } from '../internal/Function';

/**
 *  Return the result of _transformer_ with using _input_ as an argument for it if _input_ is `Ok(T)`.
 *  Otherwise, return _defaultValue_.
 *
 *  Basically, this operation is a combination `map()` and `unwrapOr()`.
 */
export function mapOrForResult<T, E, U>(
    input: Result<T, E>,
    defaultValue: U,
    transformer: TransformFn<T, U>
): U {
    if (input.ok) {
        const transformed: U = transformer(input.val);
        return transformed;
    }

    return defaultValue;
}
