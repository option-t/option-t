import { type Result, type Ok, type Err, createOk, createErr } from '../../plain_result/result.js';
import { isNull, type Nullable } from '../core/nullable.js';

/**
 *  Return `Err<void>` if _input_ is `null`.
 *  Otherwise, return `Ok<T>` directly.
 */
export function toResultOkFromNullable<T>(input: Nullable<T>): Result<T, void> {
    if (isNull(input)) {
        return createErr(undefined);
    }

    const result: Ok<T> = createOk(input);
    return result;
}

/**
 *  Return `Ok<void>` if _input_ is `null`.
 *  Otherwise, return `Err<E>` directly.
 */
export function toResultErrFromNullable<E>(input: Nullable<E>): Result<void, E> {
    if (isNull(input)) {
        return createOk(undefined);
    }

    const result: Err<E> = createErr(input);
    return result;
}
