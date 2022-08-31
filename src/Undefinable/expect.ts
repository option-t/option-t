import { isNotUndefined, NotUndefined, Undefinable } from './Undefinable.js';

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
