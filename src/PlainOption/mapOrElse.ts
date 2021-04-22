import { TransformFn, RecoveryFn } from '../shared/Function';
import { Option } from './Option';

/**
 *  Maps a `Option<T>` to `U` by applying _transformer_ to a contained `Some(T)` value in _input_,
 *  or a _recoverer_ function to a contained `None` value in _input_.
 *  This function can be used to unpack a successful result while handling an error.
 */
export function mapOrElseForOption<T, U>(
    input: Option<T>,
    recoverer: RecoveryFn<U>,
    transformer: TransformFn<T, U>
): U {
    let r: U;
    if (input.ok) {
        r = transformer(input.val);
    } else {
        r = recoverer();
    }
    return r;
}
