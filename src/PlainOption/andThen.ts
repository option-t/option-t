import { TransformFn } from '../shared/Function';
import { Option } from './Option';

export type OptionTryTransformFn<T, U> = TransformFn<T, Option<U>>;

/**
 *  @deprecated Use OptionTryTransformFn in the same module.
 */
export type FlatmapFn<T, U> = OptionTryTransformFn<T, U>;

/**
 *  Returns `None` if the _src_ is `None`,
 *  otherwise calls _selector_ with the value and returns the result.
 *
 *  XXX:
 *  Some languages call this operation flatmap.
 *  But we don't provide `flatMap()` as alias of this function
 *  to sort with other APIs.
 */
export function andThenForOption<T, U>(
    src: Option<T>,
    selector: OptionTryTransformFn<T, U>
): Option<U> {
    if (src.ok) {
        const r = selector(src.val);
        return r;
    } else {
        return src;
    }
}
