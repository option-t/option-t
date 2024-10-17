import type { FilterFn, TypePredicateFn } from '../internal/function.js';
import { isUndefined, type Undefinable } from './undefinable.js';

/**
 * Returns `true` if the _input_ is `T` and the value matches a _predicate_.
 */
// XXX:
// We cannot use `input is T` as the returned type here because of that
// it **does not mean** "input is not T" even if _predicate_ returns `false`.
export function isSomeAndForUndefinable<T>(input: Undefinable<T>, predicate: FilterFn<T>): boolean {
    if (isUndefined(input)) {
        return false;
    }

    const ok: boolean = predicate(input);
    return ok;
}

/**
 *  Returns `true` if the _input_ is `T` and the value matches a _predicate_.
 *  Then _input_ would be `U`.
 *
 *  Please use {@link isSomeAndForUndefinable} generally if you don't have to narrow the type.
 */
export function isSomeAndWithEnsureTypeForUndefinable<T, U extends T>(
    input: Undefinable<T>,
    predicate: TypePredicateFn<T, U>,
): input is U {
    const ok = isSomeAndForUndefinable(input, predicate);
    return ok;
}
