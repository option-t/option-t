import { Option } from './Option.ts';
import { MapFn } from '../shared/Function.ts';

/**
 *  Return the result of _selector_ with using _src_ as an argument for it if _src_ is `Some(T)`.
 *  Otherwise, return _def_.
 *
 *  Basically, this operation is a combination `map()` and `unwrapOr()`.
 */
export function mapOrForOption<T, U>(src: Option<T>, def: U, selector: MapFn<T, U>): U {
    let r: U;
    if (src.ok) {
        r = selector(src.val);
    }
    else {
        r = def;
    }
    return r;
}
