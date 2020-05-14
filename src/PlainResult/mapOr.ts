import { Result } from './Result.ts';
import { MapFn } from '../shared/Function.ts';

/**
 *  Return the result of _selector_ with using _src_ as an argument for it if _src_ is `Ok(T)`.
 *  Otherwise, return _def_.
 *
 *  Basically, this operation is a combination `map()` and `unwrapOr()`.
 */
export function mapOrForResult<T, E, U>(src: Result<T, E>, def: U, selector: MapFn<T, U>): U {
    let r: U;
    if (src.ok) {
        r = selector(src.val);
    }
    else {
        r = def;
    }
    return r;
}
