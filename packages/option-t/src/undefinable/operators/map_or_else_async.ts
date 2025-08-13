import type { AsyncTransformFn, AsyncRecoveryFn } from '../../internal/function.js';
import {
    type Undefinable,
    isNotUndefined,
    type NotUndefined,
    expectNotUndefined,
} from '../core/undefinable.js';
import {
    ERR_MSG_TRANSFORMER_MUST_NOT_RETURN_NO_VAL_FOR_UNDEFINABLE,
    ERR_MSG_RECOVERER_MUST_NOT_RETURN_NO_VAL_FOR_UNDEFINABLE,
} from '../internal/error_message.js';

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
export async function mapOrElseAsyncForUndefinable<T, U>(
    input: Undefinable<T>,
    recoverer: AsyncRecoveryFn<NotUndefined<U>>,
    transformer: AsyncTransformFn<T, NotUndefined<U>>,
): Promise<NotUndefined<U>> {
    let result: U;
    let messageForExpect = '';

    if (isNotUndefined(input)) {
        result = await transformer(input);
        messageForExpect = ERR_MSG_TRANSFORMER_MUST_NOT_RETURN_NO_VAL_FOR_UNDEFINABLE;
    } else {
        result = await recoverer();
        messageForExpect = ERR_MSG_RECOVERER_MUST_NOT_RETURN_NO_VAL_FOR_UNDEFINABLE;
    }

    const checked: NotUndefined<U> = expectNotUndefined(result, messageForExpect);
    return checked;
}
