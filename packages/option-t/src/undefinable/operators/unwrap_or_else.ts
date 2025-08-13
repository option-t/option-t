import type { RecoveryFn } from '../../internal/function.js';
import {
    isNotUndefined,
    type NotUndefined,
    type Undefinable,
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
export function unwrapOrElseForUndefinable<T>(
    input: Undefinable<T>,
    recoverer: RecoveryFn<NotUndefined<T>>,
): NotUndefined<T> {
    if (isNotUndefined(input)) {
        return input;
    }

    const fallback: T = recoverer();
    const passed = expectNotUndefined(
        fallback,
        ERR_MSG_RECOVERER_MUST_NOT_RETURN_NO_VAL_FOR_UNDEFINABLE,
    );
    return passed;
}
