import { isNone, Option } from './Option';

export function expectIsSome<T>(v: Option<T>, msg: string): T | never {
    if (isNone(v)) {
        throw TypeError(msg);
    }

    return v.val;
}
