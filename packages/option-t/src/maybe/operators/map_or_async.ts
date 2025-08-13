import type { AsyncTransformFn } from '../../internal/function.js';

import {
    type Maybe,
    isNullOrUndefined,
    type NotNullOrUndefined,
    expectNotNullOrUndefined,
} from '../core/maybe.js';
import {
    ERR_MSG_TRANSFORMER_MUST_NOT_RETURN_NO_VAL_FOR_MAYBE,
    ERR_MSG_DEFAULT_VALUE_MUST_NOT_BE_NO_VAL_FOR_MAYBE,
} from '../internal/error_message.js';

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
export async function mapOrAsyncForMaybe<T, U>(
    input: Maybe<T>,
    defaultValue: NotNullOrUndefined<U>,
    transformer: AsyncTransformFn<T, NotNullOrUndefined<U>>,
): Promise<NotNullOrUndefined<U>> {
    if (isNullOrUndefined(input)) {
        const nonNullDefault: NotNullOrUndefined<U> = expectNotNullOrUndefined(
            defaultValue,
            ERR_MSG_DEFAULT_VALUE_MUST_NOT_BE_NO_VAL_FOR_MAYBE,
        );
        return nonNullDefault;
    }

    const result: U = await transformer(input);
    const checked: NotNullOrUndefined<U> = expectNotNullOrUndefined(
        result,
        ERR_MSG_TRANSFORMER_MUST_NOT_RETURN_NO_VAL_FOR_MAYBE,
    );
    return checked;
}
