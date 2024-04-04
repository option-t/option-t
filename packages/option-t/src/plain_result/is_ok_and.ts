import type { FilterFn } from '../internal/function.js';
import { type Result, isErr, unwrapOk } from './result.js';

/**
 * Returns `true` if the _result_ is `Ok<T>` and the value inside of it matches a _predicate_.
 */
// XXX:
// We cannot use `result is Ok<T>` as the returned type here because of that
// it **does not mean** "result is not Ok<T>" even if _predicate_ returns `false`.
export function isOkAndForResult<T, E>(result: Result<T, E>, predicate: FilterFn<T>): boolean {
    if (isErr(result)) {
        return false;
    }

    const val: T = unwrapOk(result);
    const ok: boolean = predicate(val);
    return ok;
}
