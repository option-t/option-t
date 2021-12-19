import { RecoveryFn } from '../internal/Function';
import { Undefinable } from './Undefinable';
import { expectNotUndefined } from './expect';
import { ERR_MSG_RECOVERER_MUST_NOT_RETURN_NO_VAL_FOR_UNDEFINABLE } from './ErrorMessage';

export type { RecoveryFn };

/**
 *  Return _input_ as `T` if the passed _input_ is not `undefined`.
 *  Otherwise, return the result of _recoverer_.
 *
 *  * The result of _recoverer_ must not be `Undefinable<*>`.
 *      * If you try to recover the value, use `orElse()`
 *  * If the result of _recoverer_ is `undefined`, throw `TypeError`.
 */
export function unwrapOrElseFromUndefinable<T>(input: Undefinable<T>, recoverer: RecoveryFn<T>): T {
    if (input !== undefined) {
        return input;
    }

    const fallback: T = recoverer();
    const passed: T = expectNotUndefined(
        fallback,
        ERR_MSG_RECOVERER_MUST_NOT_RETURN_NO_VAL_FOR_UNDEFINABLE
    );
    return passed;
}
