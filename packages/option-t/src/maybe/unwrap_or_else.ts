import type { RecoveryFn } from '../internal/function.js';
import { ERR_MSG_RECOVERER_MUST_NOT_RETURN_NO_VAL_FOR_MAYBE } from './internal/error_message.js';
import {
    isNotNullOrUndefined,
    type Maybe,
    type NotNullOrUndefined,
    expectNotNullOrUndefined,
} from './maybe.js';

/**
 *  Return _input_ as `T` if the passed _input_ is not `null` and `undefined`.
 *  Otherwise, return the result of _recoverer_.
 *
 *  * The result of _recoverer_ must not be `Maybe<*>`.
 *  * If the result of _recoverer_ is `null` or `undefined`, throw `TypeError`.
 */
export function unwrapOrElseForMaybe<T>(
    input: Maybe<T>,
    recoverer: RecoveryFn<NotNullOrUndefined<T>>,
): NotNullOrUndefined<T> {
    if (isNotNullOrUndefined(input)) {
        return input;
    }

    const fallback: T = recoverer();
    const passed = expectNotNullOrUndefined(
        fallback,
        ERR_MSG_RECOVERER_MUST_NOT_RETURN_NO_VAL_FOR_MAYBE,
    );
    return passed;
}

/**
 *  @deprecated 40.6.0
 *
 *  This is kept for backward compatibility.
 *  Use {@link unwrapOrElseForMaybe} instead.
 */
export const unwrapOrElseFromMaybe: typeof unwrapOrElseForMaybe = unwrapOrElseForMaybe;
