import { type Err, type Ok, type Result, createOk, isOk } from '../../plain_result/core/result.js';
import { type Maybe, isNullOrUndefined } from '../core/maybe.js';

/**
 *  Transposes a `Maybe` of a `Result` into an `Result` of a `Maybe`.
 *
 *  - `null` -> `Ok<null>`.
 *  - `undefined` -> `Ok<undefined>`
 *  - `Ok<T>` -> `Ok<T>`.
 *  - `Err<E>` -> `Err<E>`.
 */
export function transposeMaybeToResult<T, E>(input: Maybe<Result<T, E>>): Result<Maybe<T>, E> {
    if (isNullOrUndefined(input)) {
        return createOk<Maybe<T>>(input);
    }

    if (isOk(input)) {
        const rv: Ok<T> = input;
        return rv;
    }

    const rv: Err<E> = input;
    return rv;
}
