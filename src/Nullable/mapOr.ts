import { Nullable } from './Nullable';
import { expectNotNull } from './expect';
import {
    ERR_MSG_SELECTOR_MUST_NOT_RETURN_NO_VAL_FOR_NULLABLE,
    ERR_MSG_DEF_MUST_NOT_BE_NO_VAL_FOR_NULLABLE,
} from './ErrorMessage';
import { TransformFn } from '../shared/Function';

/**
 *  Return the result of _selector_ with using _src_ as an argument for it if _src_ is not `null`.
 *  Otherwise, return _def_.
 *
 *  Basically, this operation is a combination `map()` and `unwrapOr()`.
 *
 *  * `U` must not be `Nullable<*>`.
 *      * If the result of _selector_ is `null`, this throw an `Error`.
 *      * If the result of _def_ is `null`, this throw an `Error`.
 *  * If you'd like to accept `Nullable<*>` as `U`, use a combination `andThen()` and `or()`.
 */
export function mapOrForNullable<T, U>(src: Nullable<T>, def: U, selector: TransformFn<T, U>): U {
    let r: U;
    let msg = '';
    if (src !== null) {
        r = selector(src);
        msg = ERR_MSG_SELECTOR_MUST_NOT_RETURN_NO_VAL_FOR_NULLABLE;
    } else {
        r = def;
        msg = ERR_MSG_DEF_MUST_NOT_BE_NO_VAL_FOR_NULLABLE;
    }
    return expectNotNull(r, msg);
}
