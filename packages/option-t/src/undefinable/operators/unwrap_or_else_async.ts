import type { AsyncRecoveryFn } from '../../internal/function.js';

import {
    type Undefinable,
    isNotUndefined,
    type NotUndefined,
    expectNotUndefined,
} from '../core/undefinable.js';
import { ERR_MSG_RECOVERER_MUST_NOT_RETURN_NO_VAL_FOR_UNDEFINABLE } from '../internal/error_message.js';

/**
 *  Return _input_ as `T` if the passed _input_ is not `undefined`.
 *  Otherwise, return the result of _recoverer_.
 *
 *  * The result of _recoverer_ must not be `Undefinable<*>`.
 *      * If you try to recover the value, use `orElse()`
 *  * If the result of _recoverer_ is `undefined`, throw `TypeError`.
 */
export async function unwrapOrElseAsyncForUndefinable<T>(
    input: Undefinable<T>,
    recoverer: AsyncRecoveryFn<NotUndefined<T>>,
): Promise<NotUndefined<T>> {
    if (isNotUndefined(input)) {
        return input;
    }

    const fallback: T = await recoverer();
    const checked: NotUndefined<T> = expectNotUndefined(
        fallback,
        ERR_MSG_RECOVERER_MUST_NOT_RETURN_NO_VAL_FOR_UNDEFINABLE,
    );
    return checked;
}
