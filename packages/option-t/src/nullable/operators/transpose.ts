import { type Err, type Ok, type Result, createOk, isOk } from '../../plain_result/core/result.js';
import { isNull, type Nullable } from '../core/nullable.js';

/**
 *  Transposes a `Nullable` of a `Result` into an `Result` of a `Nullable`.
 *
 *  - `null` -> `Ok<null>`.
 *  - `Ok<T>` -> `Ok<T>`.
 *  - `Err<E>` -> `Err<E>`.
 */
export function transposeNullableToResult<T, E>(
    input: Nullable<Result<T, E>>,
): Result<Nullable<T>, E> {
    if (isNull(input)) {
        return createOk<Nullable<T>>(null);
    }

    if (isOk(input)) {
        const rv: Ok<T> = input;
        return rv;
    }

    const rv: Err<E> = input;
    return rv;
}
