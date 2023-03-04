import { assertIsPromise } from '../internal/assert.js';
import {
    ERR_MSG_TRANSFORMER_MUST_RETURN_PROMISE,
    ERR_MSG_RECOVERER_MUST_RETURN_PROMISE,
} from '../internal/ErrorMessage.js';
import type { AsyncTransformFn, AsyncRecoveryFn } from '../internal/Function.js';

import {
    ERR_MSG_TRANSFORMER_MUST_NOT_RETURN_NO_VAL_FOR_MAYBE,
    ERR_MSG_RECOVERER_MUST_NOT_RETURN_NO_VAL_FOR_MAYBE,
} from './internal/ErrorMessage.js';
import {
    type Maybe,
    isNotNullOrUndefined,
    type NotNullOrUndefined,
    expectNotNullOrUndefined,
} from './Maybe.js';

/**
 *  Return the result of _transformer_ with using _input_ as an argument for it if _input_ is not `null` and `undefined`.
 *  Otherwise, return the result of _recoverer_.
 *
 *  Basically, this operation is a combination `map()` and `unwrapOrElse()`.
 *
 *  * `U` must not be `Maybe<*>`.
 *      * If the result of _transformer_ is `null` or `undefined`, this throw an `Error`.
 *      * If the result of _recoverer_ is `null` or `undefined`, this throw an `Error`.
 *  * If you'd like to accept `Maybe<*>` as `U`, use a combination `andThen()` and `orElse()`.
 */
export function mapOrElseAsyncForMaybe<T, U>(
    input: Maybe<T>,
    recoverer: AsyncRecoveryFn<NotNullOrUndefined<U>>,
    transformer: AsyncTransformFn<T, NotNullOrUndefined<U>>
): Promise<NotNullOrUndefined<U>> {
    let result: Promise<U>;
    let messageForPromiseCheck = '';
    let messageForExpect = '';

    if (isNotNullOrUndefined(input)) {
        result = transformer(input);
        messageForPromiseCheck = ERR_MSG_TRANSFORMER_MUST_RETURN_PROMISE;
        messageForExpect = ERR_MSG_TRANSFORMER_MUST_NOT_RETURN_NO_VAL_FOR_MAYBE;
    } else {
        result = recoverer();
        messageForPromiseCheck = ERR_MSG_RECOVERER_MUST_RETURN_PROMISE;
        messageForExpect = ERR_MSG_RECOVERER_MUST_NOT_RETURN_NO_VAL_FOR_MAYBE;
    }

    // If this is async function, this always return Promise, but not.
    // We should check to clarify the error case if user call this function from plain js
    // and they mistake to use this.
    assertIsPromise(result, messageForPromiseCheck);

    const passed = result.then((result) => {
        const unwrappedResult = expectNotNullOrUndefined(result, messageForExpect);
        return unwrappedResult;
    });
    return passed;
}
