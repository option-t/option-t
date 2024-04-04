import type { FilterFn } from '../internal/function.js';
import { isOk, unwrapErr, type Result } from './result.js';

/**
 *  Returns `true` if the _result_ is `Err<E>` and the value inside of it matches a _predicate_.
 */
// XXX:
// We cannot use `result is Err<E>` as the returned type here because of that
// it **does not mean** "result is not Err<E>" even if _predicate_ returns `false`.
export function isErrAndForResult<T, E>(result: Result<T, E>, predicate: FilterFn<E>): boolean {
    if (isOk(result)) {
        return false;
    }

    const err: E = unwrapErr(result);
    const ok: boolean = predicate(err);
    return ok;
}
