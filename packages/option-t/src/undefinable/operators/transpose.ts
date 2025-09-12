import { type Err, type Ok, type Result, createOk, isOk } from '../../plain_result/core/result.js';
import { isUndefined, type Undefinable } from '../core/undefinable.js';

/**
 *  Transposes a `Undefinable` of a `Result` into an `Result` of a `Undefinable`.
 *
 *  - `undefined` -> `Ok<undefined>`.
 *  - `Ok<T>` -> `Ok<T>`.
 *  - `Err<E>` -> `Err<E>`.
 */
export function transposeUndefinableToResult<T, E>(
    input: Undefinable<Result<T, E>>,
): Result<Undefinable<T>, E> {
    if (isUndefined(input)) {
        return createOk<Undefinable<T>>(undefined);
    }

    if (isOk(input)) {
        const rv: Ok<T> = input;
        return rv;
    }

    const rv: Err<E> = input;
    return rv;
}
