import { ERR_MSG_UNWRAP_NO_VAL_FOR_NULLABLE } from './internal/error_message.js';

export type NotNull<T> = T extends null ? never : T;

export type Nullable<T> = T | null;

export function isNotNull<T>(input: Nullable<T>): input is NotNull<T> {
    return input !== null;
}

export function isNull<T>(input: Nullable<T>): input is null {
    return input === null;
}

/**
 *  Return _input_ as `T` if the passed _input_ is not `null`.
 *  Otherwise, throw `TypeError` with the passed `msg`.
 */
export function expectNotNull<T>(input: Nullable<T>, msg: string): NotNull<T> {
    if (isNotNull(input)) {
        return input;
    }

    throw new TypeError(msg);
}

/**
 *  Return _input_ as `T` if the passed _input_ is not `null`.
 *  Otherwise, throw `TypeError`.
 */
export function unwrapNullable<T>(input: Nullable<T>): NotNull<T> {
    return expectNotNull(input, ERR_MSG_UNWRAP_NO_VAL_FOR_NULLABLE);
}
