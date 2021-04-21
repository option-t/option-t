import { assertIsPromise } from '../shared/assert';
import { ERR_MSG_RECOVERER_MUST_RETURN_PROMISE } from '../shared/ErrorMessage';
import type { AsyncRecoveryFn } from '../shared/Function';
import type { Nullable } from './Nullable';
import { expectNotNull } from './expect';
import { ERR_MSG_DEF_MUST_NOT_RETURN_NO_VAL_FOR_NULLABLE } from './ErrorMessage';

function check<T>(value: Nullable<T>): T {
    const result = expectNotNull(value, ERR_MSG_DEF_MUST_NOT_RETURN_NO_VAL_FOR_NULLABLE);
    return result;
}

/**
 *  Return _v_ as `T` if the passed _v_ is not `null`.
 *  Otherwise, return the result of _recoverer_.
 *
 *  * The result of _recoverer_ must not be `Nullable<*>`.
 *      * If you try to recover the value, use `orElse()`
 *  * If the result of _recoverer_ is `null`, throw `TypeError`.
 */
export function unwrapOrElseAsyncFromNullable<T>(
    v: Nullable<T>,
    recoverer: AsyncRecoveryFn<T>
): Promise<T> {
    if (v !== null) {
        return Promise.resolve<T>(v);
    }

    const defaultValue: Promise<T> = recoverer();

    // If this is async function, this always return Promise, but not.
    // We should check to clarify the error case if user call this function from plain js
    // and they mistake to use this.
    assertIsPromise(defaultValue, ERR_MSG_RECOVERER_MUST_RETURN_PROMISE);

    const result = defaultValue.then(check);
    return result;
}
