import { type Result, type Ok, type Err, createOk, createErr } from '../../plain_result/result.js';
import { type Maybe, isNullOrUndefined } from '../core/maybe.js';

/**
 *  Return `Err<void>` if _input_ is `null` or `undefined`.
 *  Otherwise, return `Ok<T>` directly.
 */
export function toResultOkFromMaybe<T>(input: Maybe<T>): Result<T, void> {
    if (isNullOrUndefined(input)) {
        return createErr(undefined);
    }

    const result: Ok<T> = createOk(input);
    return result;
}

/**
 *  Return `Ok<void>` if _input_ is `null` or `undefined`.
 *  Otherwise, return `Err<E>` directly.
 */
export function toResultErrFromMaybe<E>(input: Maybe<E>): Result<void, E> {
    if (isNullOrUndefined(input)) {
        return createOk(undefined);
    }

    const result: Err<E> = createErr(input);
    return result;
}
