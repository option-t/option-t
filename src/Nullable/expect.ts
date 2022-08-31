import { type NotNull, type Nullable, isNotNull } from './Nullable.js';

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
