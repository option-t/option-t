import { Option } from './Option';

export function expectIsSome<T>(v: Option<T>, msg: string): T | never {
    if (!v.ok) {
        throw TypeError(msg);
    }

    return v.val;
}
