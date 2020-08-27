import { MapFn } from '../shared/Function';
import { Option, createSome } from './Option';

/**
 *  Maps a `Option<T>` to `Option<U>` by applying a _selector_ function
 *  to an contained `Some(T)` value, leaving an `None` value untouched.
 *
 *  This function can be used to compose the results of two functions.
 */
export function mapForOption<T, U>(src: Option<T>, selector: MapFn<T, U>): Option<U> {
    if (src.ok) {
        const r: U = selector(src.val);
        return createSome(r);
    } else {
        return src;
    }
}
