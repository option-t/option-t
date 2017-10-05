import { expectIsOk, expectIsErr } from './expect';
import { Result } from './Result';

export function unwrapFromResult<T, E>(v: Result<T, E>): T | never {
    return expectIsOk(v, 'called with `Err`');
}

export function unwrapErrFromResult<T, E>(v: Result<T, E>): E | never {
    return expectIsErr(v, 'called with `Ok`');
}
