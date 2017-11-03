import { Undefinable } from './Undefinable';

export function expectNotUndefined<T>(v: Undefinable<T>, msg: string): T | never {
    if (v === undefined) {
        throw TypeError(msg);
    }
    return v;
}
