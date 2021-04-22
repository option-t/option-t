import { Option } from './Option';

/**
 *  Return _input_ as `T` if the passed _input_ is `Some(T)`.
 *  Otherwise, throw `TypeError` with the passed `msg`.
 */
export function expectIsSome<T>(input: Option<T>, msg: string): T | never {
    if (!input.ok) {
        throw new TypeError(msg);
    }

    return input.val;
}
