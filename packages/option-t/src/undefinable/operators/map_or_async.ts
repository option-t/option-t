import type { AsyncTransformFn } from '../../internal/function.js';

import {
    type Undefinable,
    isUndefined,
    type NotUndefined,
    expectNotUndefined,
} from '../core/undefinable.js';
import {
    ERR_MSG_TRANSFORMER_MUST_NOT_RETURN_NO_VAL_FOR_UNDEFINABLE,
    ERR_MSG_DEFAULT_VALUE_MUST_NOT_BE_NO_VAL_FOR_UNDEFINABLE,
} from '../internal/error_message.js';

/**
 *  Return the result of _transformer_ with using _input_ as an argument for it if _input_ is not `undefined`.
 *  Otherwise, return _defaultValue_.
 *
 *  Basically, this operation is a combination `map()` and `unwrapOr()`.
 *
 *  * `U` must not be `Undefinable<*>`.
 *      * If the result of _transformer_ is `undefined`, this throw an `Error`.
 *      * If the result of _defaultValue_ is `undefined`, this throw an `Error`.
 *  * If you'd like to accept `Undefinable<*>` as `U`, use a combination `andThen()` and `or()`.
 */
export async function mapOrAsyncForUndefinable<T, U>(
    input: Undefinable<T>,
    defaultValue: NotUndefined<U>,
    transformer: AsyncTransformFn<T, NotUndefined<U>>,
): Promise<NotUndefined<U>> {
    if (isUndefined(input)) {
        const nonNullDefault: NotUndefined<U> = expectNotUndefined(
            defaultValue,
            ERR_MSG_DEFAULT_VALUE_MUST_NOT_BE_NO_VAL_FOR_UNDEFINABLE,
        );
        return nonNullDefault;
    }

    const result: U = await transformer(input);

    const checked: NotUndefined<U> = expectNotUndefined(
        result,
        ERR_MSG_TRANSFORMER_MUST_NOT_RETURN_NO_VAL_FOR_UNDEFINABLE,
    );
    return checked;
}
