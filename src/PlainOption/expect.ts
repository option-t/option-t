import { Option } from './Option.js';

/**
 *  Return _input_ as `T` if the passed _input_ is `Some(T)`.
 *  Otherwise, throw `TypeError` with the passed `msg`.
 */
export function expectSomeForOption<T>(input: Option<T>, msg: string): T | never {
    if (!input.ok) {
        throw new TypeError(msg);
    }

    return input.val;
}

/**
 *  @deprecated
 *  Use {@link expectSomeForOption}
 */
export const expectIsSome: typeof expectSomeForOption = expectSomeForOption;
