import { assertIsPromise } from '../internal/assert';
import { ERR_MSG_RECOVERER_MUST_RETURN_PROMISE } from '../internal/ErrorMessage';
import type { AsyncRecoveryFn } from '../internal/Function';

import { Maybe, isNotNullAndUndefined } from './Maybe';
import { expectNotNullAndUndefined } from './expect';
import { ERR_MSG_RECOVERER_MUST_NOT_RETURN_NO_VAL_FOR_MAYBE } from './ErrorMessage';

export type { AsyncRecoveryFn };

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
    recoverer: AsyncRecoveryFn<T>
): Promise<T> {
    if (isNotNullAndUndefined(input)) {
        return Promise.resolve(input);
    }

    const fallback: Promise<T> = recoverer();

    // If this is async function, this always return Promise, but not.
    // We should check to clarify the error case if user call this function from plain js
    // and they mistake to use this.
    assertIsPromise(fallback, ERR_MSG_RECOVERER_MUST_RETURN_PROMISE);

    const passed = fallback.then(check);
    return passed;
}
