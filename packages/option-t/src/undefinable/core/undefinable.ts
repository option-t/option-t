import { ERR_MSG_UNWRAP_NO_VAL_FOR_UNDEFINABLE } from '../internal/error_message.js';

export type NotUndefined<T> = T extends undefined ? never : T;

// Ideally, probably it might be better to make this `NotUndefined<T> | undefined`.
// But we keep this type simple to interoperable with others
// (3rd party libraries, exist code, or a returned value type of buitin types')
// to allow to assign to a value typed as this directly.
export type Undefinable<T> = T | undefined;

export function isNotUndefined<T>(input: Undefinable<T>): input is NotUndefined<T> {
    return input !== undefined;
}

export function isUndefined<T>(input: Undefinable<T>): input is undefined {
    return input === undefined;
}

/**
 *  Return _input_ as `T` if the passed _input_ is not `undefined`.
 *  Otherwise, throw `TypeError` with the passed `msg`.
 */
export function expectNotUndefined<T>(input: Undefinable<T>, msg: string): NotUndefined<T> {
    if (isNotUndefined(input)) {
        return input;
    }

    throw new TypeError(msg);
}

/**
 *  Return _input_ as `T` if the passed _input_ is not `undefined`.
 *  Otherwise, throw `TypeError`.
 */
export function unwrapUndefinable<T>(input: Undefinable<T>): NotUndefined<T> {
    return expectNotUndefined(input, ERR_MSG_UNWRAP_NO_VAL_FOR_UNDEFINABLE);
}
