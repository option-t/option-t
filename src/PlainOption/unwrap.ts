import { expectSomeForOption } from './expect.js';
import { ERR_MSG_UNWRAP_SOME_BUT_INPUT_IS_NONE } from './internal/ErrorMessage.js';
import { Option } from './Option.js';

/**
 *  Return the inner `T` of a `Some(T)`.
 *
 *  @throws {TypeError}
 *      Throws if the self is a `None`.
 */
export function unwrapOption<T>(input: Option<T>): T | never {
    return expectSomeForOption(input, ERR_MSG_UNWRAP_SOME_BUT_INPUT_IS_NONE);
}

export { unwrapOption as unwrapSomeFromOption };
