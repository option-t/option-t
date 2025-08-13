import type { AsyncRecoveryFn } from '../../internal/function.js';

import {
    type Maybe,
    isNotNullOrUndefined,
    type NotNullOrUndefined,
    expectNotNullOrUndefined,
} from '../core/maybe.js';
import { ERR_MSG_RECOVERER_MUST_NOT_RETURN_NO_VAL_FOR_MAYBE } from '../internal/error_message.js';

/**
 *  Return _input_ as `T` if the passed _input_ is not `null` and `undefined`.
 *  Otherwise, return the result of _recoverer_.
 *
 *  * The result of _recoverer_ must not be `Maybe<*>`.
 *  * If the result of _recoverer_ is `null` or `undefined`, throw `TypeError`.
 */
export async function unwrapOrElseAsyncForMaybe<T>(
    input: Maybe<T>,
    recoverer: AsyncRecoveryFn<NotNullOrUndefined<T>>,
): Promise<NotNullOrUndefined<T>> {
    if (isNotNullOrUndefined(input)) {
        return input;
    }

    const fallback: T = await recoverer();

    const checked = expectNotNullOrUndefined(
        fallback,
        ERR_MSG_RECOVERER_MUST_NOT_RETURN_NO_VAL_FOR_MAYBE,
    );
    return checked;
}
