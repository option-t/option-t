import { Maybe } from './Maybe';

export function expectNotNullAndUndefined<T>(v: Maybe<T>, msg: string): T | never {
    if (v === undefined || v === null) {
        throw TypeError(msg);
    }

    return v;
}
