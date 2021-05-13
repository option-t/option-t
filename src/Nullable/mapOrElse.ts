import { expectNotNull } from './expect';
import {
    ERR_MSG_TRANSFORMER_MUST_NOT_RETURN_NO_VAL_FOR_NULLABLE,
    ERR_MSG_RECOVERER_MUST_NOT_RETURN_NO_VAL_FOR_NULLABLE,
} from './ErrorMessage';
import { TransformFn, RecoveryFn } from '../internal/Function';
import { Nullable } from './Nullable';

/**
 *  Return the result of _transformer_ with using _input_ as an argument for it if _input_ is not `null`.
 *  Otherwise, return the result of _recoverer_.
 *
 *  Basically, this operation is a combination `map()` and `unwrapOrElse()`.
 *
 *  * `U` must not be `Nullable<*>`.
 *      * If the result of _transformer_ is `null`, this throw an `Error`.
 *      * If the result of _recoverer_ is null`, this throw an `Error`.
 *  * If you'd like to accept `Nullable<*>` as `U`, use a combination `andThen()` and `orElse()`.
 */
export function mapOrElseForNullable<T, U>(
    input: Nullable<T>,
    recoverer: RecoveryFn<U>,
    transformer: TransformFn<T, U>
): U {
    let r: U;
    let msg = '';
    if (input !== null) {
        r = transformer(input);
        msg = ERR_MSG_TRANSFORMER_MUST_NOT_RETURN_NO_VAL_FOR_NULLABLE;
    } else {
        r = recoverer();
        msg = ERR_MSG_RECOVERER_MUST_NOT_RETURN_NO_VAL_FOR_NULLABLE;
    }
    return expectNotNull(r, msg);
}
