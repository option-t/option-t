import type { AsyncTransformFn, AsyncRecoveryFn } from '../../internal/function.js';

import {
    type Maybe,
    isNotNullOrUndefined,
    type NotNullOrUndefined,
    expectNotNullOrUndefined,
} from '../core/maybe.js';
import {
    ERR_MSG_TRANSFORMER_MUST_NOT_RETURN_NO_VAL_FOR_MAYBE,
    ERR_MSG_RECOVERER_MUST_NOT_RETURN_NO_VAL_FOR_MAYBE,
} from '../internal/error_message.js';

/**
 *  Return the result of _transformer_ with using _input_ as an argument for it if _input_ is not `null` and `undefined`.
 *  Otherwise, return the result of _recoverer_.
 *
 *  Basically, this operation is a combination `map()` and `unwrapOrElse()`.
 *
 *  * `U` must not be `Maybe<*>`.
 *      * If the result of _transformer_ is `null` or `undefined`, this throw an `Error`.
 *      * If the result of _recoverer_ is `null` or `undefined`, this throw an `Error`.
 *  * If you'd like to accept `Maybe<*>` as `U`, use a combination `andThen()` and `orElse()`.
 */
export async function mapOrElseAsyncForMaybe<T, U>(
    input: Maybe<T>,
    recoverer: AsyncRecoveryFn<NotNullOrUndefined<U>>,
    transformer: AsyncTransformFn<T, NotNullOrUndefined<U>>,
): Promise<NotNullOrUndefined<U>> {
    let result: U;
    let messageForExpect: string;

    if (isNotNullOrUndefined(input)) {
        result = await transformer(input);
        messageForExpect = ERR_MSG_TRANSFORMER_MUST_NOT_RETURN_NO_VAL_FOR_MAYBE;
    } else {
        result = await recoverer();
        messageForExpect = ERR_MSG_RECOVERER_MUST_NOT_RETURN_NO_VAL_FOR_MAYBE;
    }

    const checked: NotNullOrUndefined<U> = expectNotNullOrUndefined(result, messageForExpect);
    return checked;
}
