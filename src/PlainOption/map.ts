import { TransformFn } from '../internal/Function';
import { Option, createSome } from './Option';

/**
 *  Maps a `Option<T>` to `Option<U>` by applying a _transformer_ function
 *  to an contained `Some(T)` value, leaving an `None` value untouched.
 *
 *  This function can be used to compose the results of two functions.
 */
export function mapForOption<T, U>(input: Option<T>, transformer: TransformFn<T, U>): Option<U> {
    if (input.ok) {
        const r: U = transformer(input.val);
        return createSome(r);
    } else {
        return input;
    }
}
