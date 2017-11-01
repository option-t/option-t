import { Nullable } from './Nullable';

export function expectNotNull<T>(v: Nullable<T>, msg: string): T | never {
    if (v === null) {
        throw TypeError(msg);
    }

    return v;
}
