import type { FilterFn, TypePredicateFn } from '../internal/function.js';
import { isNull, type Nullable } from './nullable.js';

/**
 * Returns `true` if the _input_ is `T` and the value matches a _predicate_.
 */
// XXX:
// We cannot use `input is T` as the returned type here because of that
// it **does not mean** "input is not T" even if _predicate_ returns `false`.
export function isSomeAndForNullable<T>(input: Nullable<T>, predicate: FilterFn<T>): boolean {
    if (isNull(input)) {
        return false;
    }

    const ok: boolean = predicate(input);
    return ok;
}

/**
 *  Returns `true` if the _input_ is `T` and the value matches a _predicate_.
 *  Then _input_ would be `U`.
 *
 *  Please use {@link isSomeAndForNullable} generally if you don't have to narrow the type.
 */
export function isSomeAndWithEnsureTypeForNullable<T, U extends T>(
    input: Nullable<T>,
    predicate: TypePredicateFn<T, U>,
): input is U {
    const ok = isSomeAndForNullable(input, predicate);
    return ok;
}
