import { assertIsPromise } from '../internal/assert.js';
import { ERR_MSG_RECOVERER_MUST_RETURN_PROMISE } from '../internal/ErrorMessage.js';
import type { AsyncRecoveryFn } from '../internal/Function.js';

import {
    type Undefinable,
    isNotUndefined,
    type NotUndefined,
    expectNotUndefined,
} from './Undefinable.js';
import { ERR_MSG_RECOVERER_MUST_NOT_RETURN_NO_VAL_FOR_UNDEFINABLE } from './ErrorMessage.js';

function check<T>(value: Undefinable<T>): T {
    const passed = expectNotUndefined(
        value,
        ERR_MSG_RECOVERER_MUST_NOT_RETURN_NO_VAL_FOR_UNDEFINABLE
    );
    return passed;
}

/**
 *  Return _input_ as `T` if the passed _input_ is not `undefined`.
 *  Otherwise, return the result of _recoverer_.
 *
 *  * The result of _recoverer_ must not be `Undefinable<*>`.
 *      * If you try to recover the value, use `orElse()`
 *  * If the result of _recoverer_ is `undefined`, throw `TypeError`.
 */
export function unwrapOrElseAsyncFromUndefinable<T>(
    input: Undefinable<T>,
    recoverer: AsyncRecoveryFn<NotUndefined<T>>
): Promise<NotUndefined<T>> {
    if (isNotUndefined(input)) {
        return Promise.resolve(input);
    }

    const fallback: Promise<NotUndefined<T>> = recoverer();
    // If this is async function, this always return Promise, but not.
    // We should check to clarify the error case if user call this function from plain js
    // and they mistake to use this.
    assertIsPromise(fallback, ERR_MSG_RECOVERER_MUST_RETURN_PROMISE);

    const passed = fallback.then(check);
    return passed;
}
