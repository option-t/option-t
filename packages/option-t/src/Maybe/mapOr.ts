import type { Maybe, NotNullAndUndefined } from './Maybe.js';
import { expectNotNullAndUndefined } from './expect.js';
import {
    ERR_MSG_TRANSFORMER_MUST_NOT_RETURN_NO_VAL_FOR_MAYBE,
    ERR_MSG_DEFAULT_VALUE_MUST_NOT_BE_NO_VAL_FOR_MAYBE,
} from './ErrorMessage.js';
import type { TransformFn } from '../internal/Function.js';

/**
 *  Return the result of _transformer_ with using _input_ as an argument for it if _input_ is not `null` and `undefined`.
 *  Otherwise, return _defaultValue_.
 *
 *  Basically, this operation is a combination `map()` and `unwrapOr()`.
 *
 *  * `U` must not be `Maybe<*>`.
 *      * If the result of _transformer_ is `null` or `undefined`, this throw an `Error`.
 *      * If the result of _defaultValue_ is `null` or `undefined`, this throw an `Error`.
 *  * If you'd like to accept `Maybe<*>` as `U`, use a combination `andThen()` and `or()`.
 */
export function mapOrForMaybe<T, U>(
    input: Maybe<T>,
    defaultValue: NotNullAndUndefined<U>,
    transformer: TransformFn<T, NotNullAndUndefined<U>>
): NotNullAndUndefined<U> {
    let result: U;
    let msg = '';
    if (input !== undefined && input !== null) {
        result = transformer(input);
        msg = ERR_MSG_TRANSFORMER_MUST_NOT_RETURN_NO_VAL_FOR_MAYBE;
    } else {
        result = defaultValue;
        msg = ERR_MSG_DEFAULT_VALUE_MUST_NOT_BE_NO_VAL_FOR_MAYBE;
    }
    const passed = expectNotNullAndUndefined(result, msg);
    return passed;
}
