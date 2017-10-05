import { Result, isOk, isErr } from './Result';

export function expectIsOk<T, E>(v: Result<T, E>, msg: string): T | never {
    if (isErr(v)) {
        throw TypeError(msg);
    }

    return v.val;
}

export function expectIsErr<T, E>(v: Result<T, E>, msg: string): E | never {
    if (isOk(v)) {
        throw TypeError(msg);
    }

    return v.err;
}
