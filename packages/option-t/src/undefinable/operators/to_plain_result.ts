import {
    type Result,
    type Ok,
    type Err,
    createOk,
    createErr,
} from '../../plain_result/core/result.js';
import { isUndefined, type Undefinable } from '../core/undefinable.js';

/**
 *  Return `Err<void>` if _input_ is `undefinable`.
 *  Otherwise, return `Ok<T>` directly.
 */
export function toResultOkFromUndefinable<T>(input: Undefinable<T>): Result<T, void> {
    if (isUndefined(input)) {
        return createErr(undefined);
    }

    const result: Ok<T> = createOk(input);
    return result;
}

/**
 *  Return `Ok<void>` if _input_ is `undefinable`.
 *  Otherwise, return `Err<E>` directly.
 */
export function toResultErrFromUndefinable<E>(input: Undefinable<E>): Result<void, E> {
    if (isUndefined(input)) {
        return createOk(undefined);
    }

    const result: Err<E> = createErr(input);
    return result;
}
