import { Maybe } from './Maybe';

/**
 *  Return _input_ as `T` if the passed _input_ is not `null` and `undefined`.
 *  Otherwise, throw `TypeError` with the passed `msg`.
 */
export function expectNotNullAndUndefined<T>(input: Maybe<T>, msg: string): T | never {
    if (input === undefined || input === null) {
        throw new TypeError(msg);
    }

    return input;
}
