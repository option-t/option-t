import { ERR_MSG_UNWRAP_NO_VAL_FOR_MAYBE } from '../internal/error_message.js';

export type NotNullOrUndefined<T> = T extends null | undefined ? never : T;

// Ideally, probably it might be better to make this `NotNullOrUndefined<T> | null | undefined`.
// But we keep this type simple to interoperable with others
// (3rd party libraries, exist code, or a returned value type of buitin types')
// to allow to assign to a value typed as this directly.
export type Maybe<T> = T | null | undefined;

export function isNotNullOrUndefined<T>(input: Maybe<T>): input is NotNullOrUndefined<T> {
    return input !== undefined && input !== null;
}

export function isNullOrUndefined<T>(input: Maybe<T>): input is null | undefined {
    return input === undefined || input === null;
}

/**
 *  Return _input_ as `T` if the passed _input_ is not `null` and `undefined`.
 *  Otherwise, throw `TypeError` with the passed `msg`.
 */
export function expectNotNullOrUndefined<T>(input: Maybe<T>, msg: string): NotNullOrUndefined<T> {
    if (isNotNullOrUndefined(input)) {
        return input;
    }

    throw new TypeError(msg);
}

/**
 *  Return _value_ as `T` if the passed _value_ is not `null` and `undefined`.
 *  Otherwise, throw `TypeError`.
 */
export function unwrapMaybe<T>(value: Maybe<T>): NotNullOrUndefined<T> {
    return expectNotNullOrUndefined(value, ERR_MSG_UNWRAP_NO_VAL_FOR_MAYBE);
}
