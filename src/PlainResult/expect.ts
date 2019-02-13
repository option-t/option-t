import { Result } from './Result';

export function expectIsOk<T, E>(v: Result<T, E>, msg: string): T | never {
    if (!v.ok) {
        throw new TypeError(msg);
    }

    return v.val;
}

export function expectIsErr<T, E>(v: Result<T, E>, msg: string): E | never {
    if (v.ok) {
        throw new TypeError(msg);
    }

    return v.err;
}
