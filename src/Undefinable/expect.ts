import { Undefinable } from './Undefinable';

/**
 *  Return _input_ as `T` if the passed _input_ is not `undefined`.
 *  Otherwise, throw `TypeError` with the passed `msg`.
 */
export function expectNotUndefined<T>(input: Undefinable<T>, msg: string): T | never {
    if (input === undefined) {
        throw new TypeError(msg);
    }
    return input;
}
