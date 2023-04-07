import type { RecoveryFn } from '../internal/Function.js';
import { expectNotNull, isNotNull, type NotNull, type Nullable } from './Nullable.js';
import { ERR_MSG_RECOVERER_MUST_NOT_RETURN_NO_VAL_FOR_NULLABLE } from './ErrorMessage.js';

/**
 *  Return _input_ as `T` if the passed _input_ is not `null`.
 *  Otherwise, return the result of _recoverer_.
 *
 *  * The result of _recoverer_ must not be `Nullable<*>`.
 *      * If you try to recover the value, use `orElse()`
 *  * If the result of _recoverer_ is `null`, throw `TypeError`.
 */
export function unwrapOrElseFromNullable<T>(
    input: Nullable<T>,
    recoverer: RecoveryFn<NotNull<T>>
): NotNull<T> {
    if (isNotNull(input)) {
        return input;
    }

    const fallback: T = recoverer();
    const passed: NotNull<T> = expectNotNull(
        fallback,
        ERR_MSG_RECOVERER_MUST_NOT_RETURN_NO_VAL_FOR_NULLABLE
    );
    return passed;
}
