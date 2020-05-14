import { expectNotNull } from './expect.ts';
import { ERR_MSG_SELECTOR_MUST_NOT_RETURN_NO_VAL_FOR_NULLABLE, ERR_MSG_DEF_MUST_NOT_RETURN_NO_VAL_FOR_NULLABLE } from './ErrorMessage.ts';
import { MapFn, RecoveryFn } from '../shared/Function.ts';
import { Nullable } from './Nullable.ts';

/**
 *  Return the result of _selector_ with using _src_ as an argument for it if _src_ is not `null`.
 *  Otherwise, return the result of _def_.
 *
 *  Basically, this operation is a combination `map()` and `unwrapOrElse()`.
 *
 *  * `U` must not be `Nullable<*>`.
 *      * If the result of _selector_ is `null`, this throw an `Error`.
 *      * If the result of _def_ is null`, this throw an `Error`.
 *  * If you'd like to accept `Nullable<*>` as `U`, use a combination `andThen()` and `orElse()`.
 */
export function mapOrElseForNullable<T, U>(src: Nullable<T>, def: RecoveryFn<U>, selector: MapFn<T, U>): U {
    let r: U;
    let msg = '.ts';
    if (src !== null) {
        r = selector(src);
        msg = ERR_MSG_SELECTOR_MUST_NOT_RETURN_NO_VAL_FOR_NULLABLE;
    }
    else {
        r = def();
        msg = ERR_MSG_DEF_MUST_NOT_RETURN_NO_VAL_FOR_NULLABLE;
    }
    return expectNotNull(r, msg);
}
