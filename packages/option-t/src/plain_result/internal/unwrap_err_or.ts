import { type Result, isOk, unwrapErr } from '../result.js';

export function unwrapErrOrForResult<E>(input: Result<unknown, E>, defaultValue: E): E {
    if (isOk(input)) {
        return defaultValue;
    }

    const val: E = unwrapErr(input);
    return val;
}
