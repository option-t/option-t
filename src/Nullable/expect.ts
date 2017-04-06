import { isNull, Nullable } from './Nullable';

export function expectNotNull<T>(v: Nullable<T>, msg: string): T | never {
    if (isNull(v)) {
        throw TypeError(msg);
    }

    return v;
}