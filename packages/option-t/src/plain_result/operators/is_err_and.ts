import type { FilterFn, TypePredicateFn } from '../../internal/function.js';
import { isOk, type Result, type Err } from '../core/result.js';
import { unsafeUnwrapValueInErrWithoutAnyCheck } from '../internal/intrinsics_unsafe.js';

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

    const err: E = unsafeUnwrapValueInErrWithoutAnyCheck(result);
    const ok: boolean = predicate(err);
    return ok;
}

/**
 *  Returns `true` if the _result_ is `Ok<T>` and the value inside of it matches a _predicate_.
 *  Then _result_ would be `Err<F>`.
 *
 *  Please use {@link isErrAndForResult} generally if you don't have to narrow the type.
 */
export function isErrAndWithEnsureTypeForResult<T, E, F extends E>(
    result: Result<T, E>,
    predicate: TypePredicateFn<E, F>,
): result is Err<F> {
    const ok = isErrAndForResult(result, predicate);
    return ok;
}
