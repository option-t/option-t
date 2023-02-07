import { type Result, type Ok, type Err, createOk, createErr } from '../PlainResult/Result.js';
import { isNull, type Nullable } from './Nullable.js';

export function toResultOkFromNullable<T>(input: Nullable<T>): Result<T, void> {
    if (isNull(input)) {
        return createErr(undefined);
    }

    const result: Ok<T> = createOk(input);
    return result;
}

export function toResultErrFromNullable<E>(input: Nullable<E>): Result<void, E> {
    if (isNull(input)) {
        return createOk(undefined);
    }

    const result: Err<E> = createErr(input);
    return result;
}
