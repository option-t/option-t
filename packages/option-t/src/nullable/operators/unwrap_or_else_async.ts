import type { AsyncRecoveryFn } from '../../internal/function.js';
import { isNotNull, type NotNull, type Nullable, expectNotNull } from '../core/nullable.js';
import { ERR_MSG_RECOVERER_MUST_NOT_RETURN_NO_VAL_FOR_NULLABLE } from '../internal/error_message.js';

/**
 *  Return _input_ as `T` if the passed _input_ is not `null`.
 *  Otherwise, return the result of _recoverer_.
 *
 *  * The result of _recoverer_ must not be `Nullable<*>`.
 *      * If you try to recover the value, use `orElse()`
 *  * If the result of _recoverer_ is `null`, throw `TypeError`.
 */
export async function unwrapOrElseAsyncForNullable<T>(
    input: Nullable<T>,
    recoverer: AsyncRecoveryFn<NotNull<T>>,
): Promise<NotNull<T>> {
    if (isNotNull(input)) {
        return input;
    }

    const fallback: NotNull<T> = await recoverer();

    const checked = expectNotNull(fallback, ERR_MSG_RECOVERER_MUST_NOT_RETURN_NO_VAL_FOR_NULLABLE);
    return checked;
}
