import type { FilterFn, TypePredicateFn } from '../internal/function.js';
import { type Result, type Ok, isErr, unwrapOk } from './result.js';

/**
 * Returns `true` if the _result_ is `Ok<T>` and the value inside of it matches a _predicate_.
 */
export function isOkAnd<T, E>(result: Result<T, E>, predicate: FilterFn<T>): boolean {
    if (isErr(result)) {
        return false;
    }

    const val: T = unwrapOk(result);
    const ok: boolean = predicate(val);
    return ok;
}

/**
 *  Returns `true` if the _result_ is `Ok<T>` and the value inside of it matches a _predicate_.
 *  Then _result_ would be `Ok<U>`.
 *
 *  Please use {@link isOkAnd} generally if you don't have to narrow the type.
 */
export function isOkAndWithEnsureType<T, E, U extends T>(
    result: Result<T, E>,
    predicate: TypePredicateFn<T, U>
): result is Ok<U> {
    const ok = isOkAnd(result, predicate);
    return ok;
}
