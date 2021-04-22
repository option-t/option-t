import { expectIsSome } from './expect';
import { Option } from './Option';

/**
 *  Return the inner `T` of a `Some(T)`.
 *
 *  @throws {TypeError}
 *      Throws if the self is a `None`.
 */
export function unwrapOption<T>(input: Option<T>): T | never {
    return expectIsSome(input, 'called with `None`');
}
