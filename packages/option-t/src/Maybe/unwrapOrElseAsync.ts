import { assertIsPromise } from '../internal/assert.js';
import { ERR_MSG_RECOVERER_MUST_RETURN_PROMISE } from '../internal/ErrorMessage.js';
import type { AsyncRecoveryFn } from '../internal/Function.js';

import { type Maybe, isNotNullAndUndefined, type NotNullAndUndefined } from './Maybe.js';
import { expectNotNullAndUndefined } from './expect.js';
import { ERR_MSG_RECOVERER_MUST_NOT_RETURN_NO_VAL_FOR_MAYBE } from './ErrorMessage.js';

function check<T>(value: Maybe<T>): T {
    const passed = expectNotNullAndUndefined(
        value,
        ERR_MSG_RECOVERER_MUST_NOT_RETURN_NO_VAL_FOR_MAYBE
    );
    return passed;
}

/**
 *  Return _input_ as `T` if the passed _input_ is not `null` and `undefined`.
 *  Otherwise, return the result of _recoverer_.
 *
 *  * The result of _recoverer_ must not be `Maybe<*>`.
 *  * If the result of _recoverer_ is `null` or `undefined`, throw `TypeError`.
 */
export function unwrapOrElseAsyncFromMaybe<T>(
    input: Maybe<T>,
    recoverer: AsyncRecoveryFn<NotNullAndUndefined<T>>
): Promise<NotNullAndUndefined<T>> {
    if (isNotNullAndUndefined(input)) {
        return Promise.resolve(input);
    }

    const fallback = recoverer();

    // If this is async function, this always return Promise, but not.
    // We should check to clarify the error case if user call this function from plain js
    // and they mistake to use this.
    assertIsPromise(fallback, ERR_MSG_RECOVERER_MUST_RETURN_PROMISE);

    const passed = fallback.then(check);
    return passed;
}
