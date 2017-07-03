import { isNullOrUndefined, Maybe } from './Maybe';

export function expectNotNullAndUndefined<T>(v: Maybe<T>, msg: string): T | never {
    if (isNullOrUndefined(v)) {
        throw TypeError(msg);
    }

    return v;
}
