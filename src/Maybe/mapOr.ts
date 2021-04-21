import { Maybe } from './Maybe';
import { expectNotNullAndUndefined } from './expect';
import {
    ERR_MSG_SELECTOR_MUST_NOT_RETURN_NO_VAL_FOR_MAYBE,
    ERR_MSG_DEF_MUST_NOT_BE_NO_VAL_FOR_MAYBE,
} from './ErrorMessage';
import { TransformFn } from '../shared/Function';

/**
 *  Return the result of _selector_ with using _src_ as an argument for it if _src_ is not `null` and `undefined`.
 *  Otherwise, return _def_.
 *
 *  Basically, this operation is a combination `map()` and `unwrapOr()`.
 *
 *  * `U` must not be `Maybe<*>`.
 *      * If the result of _selector_ is `null` or `undefined`, this throw an `Error`.
 *      * If the result of _def_ is `null` or `undefined`, this throw an `Error`.
 *  * If you'd like to accept `Maybe<*>` as `U`, use a combination `andThen()` and `or()`.
 */
export function mapOrForMaybe<T, U>(src: Maybe<T>, def: U, selector: TransformFn<T, U>): U {
    let r: U;
    let msg = '';
    if (src !== undefined && src !== null) {
        r = selector(src);
        msg = ERR_MSG_SELECTOR_MUST_NOT_RETURN_NO_VAL_FOR_MAYBE;
    } else {
        r = def;
        msg = ERR_MSG_DEF_MUST_NOT_BE_NO_VAL_FOR_MAYBE;
    }
    return expectNotNullAndUndefined(r, msg);
}
