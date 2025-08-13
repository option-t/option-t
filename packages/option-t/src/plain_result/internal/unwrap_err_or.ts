import { type Result, isOk } from '../core/result.js';
import { unsafeUnwrapValueInErrWithoutAnyCheck } from './intrinsics_unsafe.js';

export function unwrapErrOrForResult<E>(input: Result<unknown, E>, defaultValue: E): E {
    if (isOk(input)) {
        return defaultValue;
    }

    const val: E = unsafeUnwrapValueInErrWithoutAnyCheck(input);
    return val;
}
