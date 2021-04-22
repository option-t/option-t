import { RecoveryFn } from '../shared/Function';
import { Maybe } from './Maybe';
import { expectNotNullAndUndefined } from './expect';
import { ERR_MSG_RECOVERER_MUST_NOT_RETURN_NO_VAL_FOR_MAYBE } from './ErrorMessage';

/**
 *  Return _input_ as `T` if the passed _input_ is not `null` and `undefined`.
 *  Otherwise, return the result of _recoverer_.
 *
 *  * The result of _recoverer_ must not be `Maybe<*>`.
 *  * If the result of _recoverer_ is `null` or `undefined`, throw `TypeError`.
 */
export function unwrapOrElseFromMaybe<T>(input: Maybe<T>, recoverer: RecoveryFn<T>): T {
    if (input !== undefined && input !== null) {
        return input;
    } else {
        const r = recoverer();
        return expectNotNullAndUndefined(r, ERR_MSG_RECOVERER_MUST_NOT_RETURN_NO_VAL_FOR_MAYBE);
    }
}
