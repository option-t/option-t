import { ERR_MSG_SELECTOR, ERR_MSG_MUST_NOT_RETURN_UNDEF } from './ErrorMessage';
import { expectNotUndefined } from './expect';
import { RecoveryFn, MapFn } from '../utils/Function';
import { Undefinable } from './Undefinable';

/**
 *  Return the result of _selector_ with using _src_ as an argument for it if _src_ is not `undefined`.
 *  Otherwise, return the result of _def_.
 *
 *  Basically, this operation is a combination `map()` and `unwrapOrElse()`.
 *
 *  * `U` must not be `Undefinable<*>`.
 *      * If the result of _selector_ is `undefined`, this throw an `Error`.
 *      * If the result of _def_ is undefined`, this throw an `Error`.
 *  * If you'd like to accept `Undefinable<*>` as `U`, use a combination `andThen()` and `orElse()`.
 */
export function mapOrElseForUndefinable<T, U>(src: Undefinable<T>, def: RecoveryFn<U>, selector: MapFn<T, U>): U {
    let r: U;
    let msg = '';
    if (src !== undefined) {
        r = selector(src);
        msg = ERR_MSG_SELECTOR;
    }
    else {
        r = def();
        msg = '`def`' + ERR_MSG_MUST_NOT_RETURN_UNDEF;
    }
    return expectNotUndefined(r, msg);
}
