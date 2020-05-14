import { Option } from './Option.ts';
import { andThenForOption } from './andThen.ts';

function flatten<T>(input: Option<T>): Option<T> {
    return input;
}

/**
 *  Flatten the inner value of _input_.
 */
export function flattenForOption<T>(input: Option<Option<T>>): Option<T> {
    const r: Option<T> = andThenForOption(input, flatten);
    return r;
}
