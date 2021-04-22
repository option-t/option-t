import { Nullable } from './Nullable';

/**
 *  Return _input_ as `T` if the passed _input_ is not `null`.
 *  Otherwise, throw `TypeError` with the passed `msg`.
 */
export function expectNotNull<T>(input: Nullable<T>, msg: string): T | never {
    if (input === null) {
        throw new TypeError(msg);
    }

    return input;
}
