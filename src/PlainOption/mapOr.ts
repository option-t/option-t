import { Option } from './Option';
import { TransformFn } from '../shared/Function';

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
    let r: U;
    if (input.ok) {
        r = transformer(input.val);
    } else {
        r = defaultValue;
    }
    return r;
}
