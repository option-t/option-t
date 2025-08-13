import type { AsyncTransformFn, AsyncRecoveryFn } from '../../internal/function.js';
import { type Nullable, isNotNull, type NotNull, expectNotNull } from '../core/nullable.js';
import {
    ERR_MSG_TRANSFORMER_MUST_NOT_RETURN_NO_VAL_FOR_NULLABLE,
    ERR_MSG_RECOVERER_MUST_NOT_RETURN_NO_VAL_FOR_NULLABLE,
} from '../internal/error_message.js';

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
    transformer: AsyncTransformFn<T, NotNull<U>>,
): Promise<NotNull<U>> {
    let result: U;
    let messageForExpect = '';

    if (isNotNull(input)) {
        result = await transformer(input);
        messageForExpect = ERR_MSG_TRANSFORMER_MUST_NOT_RETURN_NO_VAL_FOR_NULLABLE;
    } else {
        result = await recoverer();
        messageForExpect = ERR_MSG_RECOVERER_MUST_NOT_RETURN_NO_VAL_FOR_NULLABLE;
    }

    const checked: NotNull<U> = expectNotNull(result, messageForExpect);
    return checked;
}
