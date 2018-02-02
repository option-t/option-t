import { expectNotNullAndUndefined } from './expect';
import { ERR_MSG_MUST_NOT_RETURN_NULL_OR_UNDEF, ERR_MSG_SELECTOR } from './ErrorMessage';
import { MapFn, RecoveryFn } from '../utils/Function';
import { Maybe } from './Maybe';

/**
 *  Return the result of _selector_ with using _src_ as an argument for it if _src_ is not `null` and `undefined`.
 *  Otherwise, return the result of _def_.
 *
 *  Basically, this operation is a combination `map()` and `unwrapOrElse()`.
 *
 *  * `U` must not be `Maybe<*>`.
 *      * If the result of _selector_ is `null` or `undefined`, this throw an `Error`.
 *      * If the result of _def_ is `null` or `undefined`, this throw an `Error`.
 *  * If you'd like to accept `Maybe<*>` as `U`, use a combination `andThen()` and `orElse()`.
 */
export function mapOrElseForMaybe<T, U>(src: Maybe<T>, def: RecoveryFn<U>, selector: MapFn<T, U>): U {
    let r: U;
    let msg = '';
    if (src !== undefined && src !== null) {
        r = selector(src);
        msg = ERR_MSG_SELECTOR;
    }
    else {
        r = def();
        msg = '`def`' + ERR_MSG_MUST_NOT_RETURN_NULL_OR_UNDEF;
    }
    return expectNotNullAndUndefined(r, msg);
}
