import type { RecoveryFn, TransformFn } from '../../internal/function.js';
import { type NotUndefined, type Undefinable, expectNotUndefined } from '../core/undefinable.js';
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
export function mapOrElseForUndefinable<T, U>(
    input: Undefinable<T>,
    recoverer: RecoveryFn<NotUndefined<U>>,
    transformer: TransformFn<T, NotUndefined<U>>,
): NotUndefined<U> {
    let result: U;
    let msg: string;
    if (input !== undefined) {
        result = transformer(input);
        msg = ERR_MSG_TRANSFORMER_MUST_NOT_RETURN_NO_VAL_FOR_UNDEFINABLE;
    } else {
        result = recoverer();
        msg = ERR_MSG_RECOVERER_MUST_NOT_RETURN_NO_VAL_FOR_UNDEFINABLE;
    }
    const passed = expectNotUndefined(result, msg);
    return passed;
}
