import type { Option } from './Option.js';
import { andThenForOption } from './andThen.js';

function flatten<T>(input: Option<T>): Option<T> {
    return input;
}

/**
 *  Flatten the inner value of _input_.
 */
export function flattenForOption<T>(input: Option<Option<T>>): Option<T> {
    const result: Option<T> = andThenForOption(input, flatten);
    return result;
}
