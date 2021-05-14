import { assertIsPromise } from '../internal/assert';
import { ERR_MSG_RECOVERER_MUST_RETURN_PROMISE } from '../internal/ErrorMessage';
import type { AsyncRecoveryFn } from '../internal/Function';
import type { Nullable } from './Nullable';
import { expectNotNull } from './expect';
import { ERR_MSG_RECOVERER_MUST_NOT_RETURN_NO_VAL_FOR_NULLABLE } from './ErrorMessage';

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
    recoverer: AsyncRecoveryFn<T>
): Promise<T> {
    if (input !== null) {
        return Promise.resolve<T>(input);
    }

    const fallback: Promise<T> = recoverer();

    // If this is async function, this always return Promise, but not.
    // We should check to clarify the error case if user call this function from plain js
    // and they mistake to use this.
    assertIsPromise(fallback, ERR_MSG_RECOVERER_MUST_RETURN_PROMISE);

    const passed = fallback.then(check);
    return passed;
}
