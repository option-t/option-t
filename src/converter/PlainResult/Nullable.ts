import type { Nullable } from '../../Nullable/Nullable';
import { Result, isOk } from '../../PlainResult/Result';
import { mapOrForResult } from '../../PlainResult/mapOr';
import { unwrapErrFromResult } from '../../PlainResult/unwrap';

export function fromOkToNullableOnOk<T, E>(input: Result<T, E>): Nullable<T> {
    const result: Nullable<T> = mapOrForResult<T, E, Nullable<T>>(input, null, (val) => val);
    return result;
}

export function fromResultToNullableOnErr<T, E>(input: Result<T, E>): Nullable<E> {
    if (isOk(input)) {
        return null;
    }

    const result: E = unwrapErrFromResult(input);
    return result;
}
