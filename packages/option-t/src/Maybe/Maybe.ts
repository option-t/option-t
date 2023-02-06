import { ERR_MSG_UNWRAP_NO_VAL_FOR_MAYBE } from './ErrorMessage.js';

export type NotNullAndUndefined<T> = T extends null | undefined ? never : T;

export type Maybe<T> = T | null | undefined;

export function isNotNullAndUndefined<T>(input: Maybe<T>): input is NotNullAndUndefined<T> {
    return input !== undefined && input !== null;
}

export function isNullOrUndefined<T>(input: Maybe<T>): input is null | undefined {
    return input === undefined || input === null;
}

/**
 *  Return _input_ as `T` if the passed _input_ is not `null` and `undefined`.
 *  Otherwise, throw `TypeError` with the passed `msg`.
 */
export function expectNotNullAndUndefined<T>(input: Maybe<T>, msg: string): NotNullAndUndefined<T> {
    if (isNotNullAndUndefined(input)) {
        return input;
    }

    throw new TypeError(msg);
}

/**
 *  Return _value_ as `T` if the passed _value_ is not `null` and `undefined`.
 *  Otherwise, throw `TypeError`.
 */
export function unwrapMaybe<T>(value: Maybe<T>): NotNullAndUndefined<T> {
    return expectNotNullAndUndefined(value, ERR_MSG_UNWRAP_NO_VAL_FOR_MAYBE);
}
