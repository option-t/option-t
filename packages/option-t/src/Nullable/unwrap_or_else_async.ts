import { assertIsPromise } from '../internal/assert.js';
import { ERR_MSG_RECOVERER_MUST_RETURN_PROMISE } from '../internal/error_message.js';
import type { AsyncRecoveryFn } from '../internal/function.js';
import { isNotNull, type NotNull, type Nullable } from './nullable.js';
import { expectNotNull } from './expect.js';
import { ERR_MSG_RECOVERER_MUST_NOT_RETURN_NO_VAL_FOR_NULLABLE } from './internal/error_message.js';

function check<T>(value: Nullable<T>): T {
    const passed = expectNotNull(value, ERR_MSG_RECOVERER_MUST_NOT_RETURN_NO_VAL_FOR_NULLABLE);
    return passed;
}

/**
 *  Return _input_ as `T` if the passed _input_ is not `null`.
 *  Otherwise, return the result of _recoverer_.
 *
 *  * The result of _recoverer_ must not be `Nullable<*>`.
 *      * If you try to recover the value, use `orElse()`
 *  * If the result of _recoverer_ is `null`, throw `TypeError`.
 */
export function unwrapOrElseAsyncFromNullable<T>(
    input: Nullable<T>,
    recoverer: AsyncRecoveryFn<NotNull<T>>
): Promise<NotNull<T>> {
    if (isNotNull(input)) {
        return Promise.resolve<NotNull<T>>(input);
    }

    const fallback: Promise<NotNull<T>> = recoverer();

    // If this is async function, this always return Promise, but not.
    // We should check to clarify the error case if user call this function from plain js
    // and they mistake to use this.
    assertIsPromise(fallback, ERR_MSG_RECOVERER_MUST_RETURN_PROMISE);

    const passed = fallback.then(check);
    return passed;
}
