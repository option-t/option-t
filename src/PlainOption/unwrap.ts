import { expectIsSome } from './expect';
import { Option } from './Option';

export function unwrapOption<T>(v: Option<T>): T | never {
    return expectIsSome(v, 'called with `None`');
}
