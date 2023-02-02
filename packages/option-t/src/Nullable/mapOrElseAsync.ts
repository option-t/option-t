import type { AsyncTransformFn, AsyncRecoveryFn } from '../internal/Function.js';
import { type Nullable, isNotNull, type NotNull } from './Nullable.js';
import { assertIsPromise } from '../internal/assert.js';
import {
    ERR_MSG_TRANSFORMER_MUST_RETURN_PROMISE,
    ERR_MSG_RECOVERER_MUST_RETURN_PROMISE,
} from '../internal/ErrorMessage.js';
import {
    ERR_MSG_TRANSFORMER_MUST_NOT_RETURN_NO_VAL_FOR_NULLABLE,
    ERR_MSG_RECOVERER_MUST_NOT_RETURN_NO_VAL_FOR_NULLABLE,
} from './ErrorMessage.js';
import { expectNotNull } from './expect.js';

/**
 *  Return the result of _transformer_ with using _input_ as an argument for it if _input_ is not `null`.
 *  Otherwise, return the result of _recoverer_.
 *
 *  Basically, this operation is a combination `mapAsync()` and `unwrapOrElseAsync()`.
 *
 *  * `U` must not be `Nullable<*>`.
 *      * If the result of _transformer_ is `null`, this throw an `Error`.
 *      * If the result of _recoverer_ is null`, this throw an `Error`.
 *  * If you'd like to accept `Nullable<*>` as `U`, use a combination `andThenAsync()` and `orElseAsync()`.
 */
export async function mapOrElseAsyncForNullable<T, U>(
    input: Nullable<T>,
    recoverer: AsyncRecoveryFn<NotNull<U>>,
    transformer: AsyncTransformFn<T, NotNull<U>>
): Promise<NotNull<U>> {
    let result: Nullable<Promise<U>> = null;
    let messageForPromiseCheck = '';
    let messageForExpect = '';

    if (isNotNull(input)) {
        result = transformer(input);
        messageForPromiseCheck = ERR_MSG_TRANSFORMER_MUST_RETURN_PROMISE;
        messageForExpect = ERR_MSG_TRANSFORMER_MUST_NOT_RETURN_NO_VAL_FOR_NULLABLE;
    } else {
        result = recoverer();
        messageForPromiseCheck = ERR_MSG_RECOVERER_MUST_RETURN_PROMISE;
        messageForExpect = ERR_MSG_RECOVERER_MUST_NOT_RETURN_NO_VAL_FOR_NULLABLE;
    }

    // If this is async function, this always return Promise, but not.
    // We should check to clarify the error case if user call this function from plain js
    // and they mistake to use this.
    assertIsPromise(result, messageForPromiseCheck);

    const passed = result.then((result) => {
        const unwrappedResult = expectNotNull(result, messageForExpect);
        return unwrappedResult;
    });
    return passed;
}
