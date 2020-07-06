import { Result } from './Result';
import { MapFn } from '../shared/Function';

/**
 *  Return the result of _selector_ with using _src_ as an argument for it if _src_ is `Ok(T)`.
 *  Otherwise, return _def_.
 *
 *  Basically, this operation is a combination `map()` and `unwrapOr()`.
 */
export function mapOrForResult<T, TError, U>(src: Result<T, TError>, def: U, selector: MapFn<T, U>): U {
    let r: U;
    if (src.ok) {
        r = selector(src.val);
    }
    else {
        r = def;
    }
    return r;
}
