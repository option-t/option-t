import { Nullable } from './Nullable';
import { expectNotNull } from './expect';
import {
    ERR_MSG_TRANSFORMER_MUST_NOT_RETURN_NO_VAL_FOR_NULLABLE,
    ERR_MSG_DEFAULT_VALUE_MUST_NOT_BE_NO_VAL_FOR_NULLABLE,
} from './ErrorMessage';
import { TransformFn } from '../internal/Function';

/**
 *  Return the result of _transformer_ with using _input_ as an argument for it if _input_ is not `null`.
 *  Otherwise, return _defaultValue_.
 *
 *  Basically, this operation is a combination `map()` and `unwrapOr()`.
 *
 *  * `U` must not be `Nullable<*>`.
 *      * If the result of _transformer_ is `null`, this throw an `Error`.
 *      * If the result of _defaultValue_ is `null`, this throw an `Error`.
 *  * If you'd like to accept `Nullable<*>` as `U`, use a combination `andThen()` and `or()`.
 */
export function mapOrForNullable<T, U>(
    input: Nullable<T>,
    defaultValue: U,
    transformer: TransformFn<T, U>
): U {
    let r: U;
    let msg = '';
    if (input !== null) {
        r = transformer(input);
        msg = ERR_MSG_TRANSFORMER_MUST_NOT_RETURN_NO_VAL_FOR_NULLABLE;
    } else {
        r = defaultValue;
        msg = ERR_MSG_DEFAULT_VALUE_MUST_NOT_BE_NO_VAL_FOR_NULLABLE;
    }
    return expectNotNull(r, msg);
}
