import { MapFn, RecoveryFn } from '../shared/Function.ts';
import { Option } from './Option.ts';

/**
 *  Maps a `Option<T>` to `U` by applying _selector_ to a contained `Some(T)` value in _src_,
 *  or a _def_ function to a contained `None` value in _src_.
 *  This function can be used to unpack a successful result while handling an error.
 */
export function mapOrElseForOption<T, U>(src: Option<T>, def: RecoveryFn<U>, selector: MapFn<T, U>): U {
    let r: U;
    if (src.ok) {
        r = selector(src.val);
    }
    else {
        r = def();
    }
    return r;
}
