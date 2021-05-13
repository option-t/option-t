import { RecoveryFn } from '../internal/Function';
import { Nullable } from './Nullable';
import { expectNotNull } from './expect';
import { ERR_MSG_RECOVERER_MUST_NOT_RETURN_NO_VAL_FOR_NULLABLE } from './ErrorMessage';

/**
 *  Return _input_ as `T` if the passed _input_ is not `null`.
 *  Otherwise, return the result of _recoverer_.
 *
 *  * The result of _recoverer_ must not be `Nullable<*>`.
 *      * If you try to recover the value, use `orElse()`
 *  * If the result of _recoverer_ is `null`, throw `TypeError`.
 */
export function unwrapOrElseFromNullable<T>(input: Nullable<T>, recoverer: RecoveryFn<T>): T {
    if (input !== null) {
        return input;
    } else {
        const r = recoverer();
        return expectNotNull(r, ERR_MSG_RECOVERER_MUST_NOT_RETURN_NO_VAL_FOR_NULLABLE);
    }
}
