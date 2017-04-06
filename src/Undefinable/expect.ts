import { Undefinable, isUndefined } from './Undefinable';

export function expectNotUndefined<T>(v: Undefinable<T>, msg: string): T | never {
    if (isUndefined(v)) {
        throw TypeError(msg);
    }
    return v;
}
