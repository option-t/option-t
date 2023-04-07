import type { AsyncTransformFn, AsyncRecoveryFn } from '../internal/function.js';
import {
    type Undefinable,
    isNotUndefined,
    type NotUndefined,
    expectNotUndefined,
} from './undefinable.js';
import { assertIsPromise } from '../internal/assert.js';
import {
    ERR_MSG_TRANSFORMER_MUST_RETURN_PROMISE,
    ERR_MSG_RECOVERER_MUST_RETURN_PROMISE,
} from '../internal/error_message.js';
import {
    ERR_MSG_TRANSFORMER_MUST_NOT_RETURN_NO_VAL_FOR_UNDEFINABLE,
    ERR_MSG_RECOVERER_MUST_NOT_RETURN_NO_VAL_FOR_UNDEFINABLE,
} from './internal/error_message.js';

/**
 *  Return the result of _transformer_ with using _input_ as an argument for it if _input_ is not `undefined`.
 *  Otherwise, return the result of _recoverer_.
 *
 *  Basically, this operation is a combination `map()` and `unwrapOrElse()`.
 *
 *  * `U` must not be `Undefinable<*>`.
 *      * If the result of _transformer_ is `undefined`, this throw an `Error`.
 *      * If the result of _recoverer_ is undefined`, this throw an `Error`.
 *  * If you'd like to accept `Undefinable<*>` as `U`, use a combination `andThen()` and `orElse()`.
 */
export function mapOrElseAsyncForUndefinable<T, U>(
    input: Undefinable<T>,
    recoverer: AsyncRecoveryFn<NotUndefined<U>>,
    transformer: AsyncTransformFn<T, NotUndefined<U>>
): Promise<NotUndefined<U>> {
    let result: Promise<U>;
    let messageForPromiseCheck = '';
    let messageForExpect = '';

    if (isNotUndefined(input)) {
        result = transformer(input);
        messageForPromiseCheck = ERR_MSG_TRANSFORMER_MUST_RETURN_PROMISE;
        messageForExpect = ERR_MSG_TRANSFORMER_MUST_NOT_RETURN_NO_VAL_FOR_UNDEFINABLE;
    } else {
        result = recoverer();
        messageForPromiseCheck = ERR_MSG_RECOVERER_MUST_RETURN_PROMISE;
        messageForExpect = ERR_MSG_RECOVERER_MUST_NOT_RETURN_NO_VAL_FOR_UNDEFINABLE;
    }

    // If this is async function, this always return Promise, but not.
    // We should check to clarify the error case if user call this function from plain js
    // and they mistake to use this.
    assertIsPromise(result, messageForPromiseCheck);

    const passed = result.then((result) => {
        const unwrappedResult = expectNotUndefined(result, messageForExpect);
        return unwrappedResult;
    });
    return passed;
}
