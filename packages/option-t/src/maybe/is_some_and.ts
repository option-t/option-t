import type { FilterFn, TypePredicateFn } from '../internal/function.js';
import { isNullOrUndefined, type Maybe } from './maybe.js';

/**
 * Returns `true` if the _input_ is `T` and the value matches a _predicate_.
 */
// XXX:
// We cannot use `input is T` as the returned type here because of that
// it **does not mean** "input is not T" even if _predicate_ returns `false`.
export function isSomeAndForMaybe<T>(input: Maybe<T>, predicate: FilterFn<T>): boolean {
    if (isNullOrUndefined(input)) {
        return false;
    }

    const ok: boolean = predicate(input);
    return ok;
}

/**
 *  Returns `true` if the _input_ is `T` and the value matches a _predicate_.
 *  Then _input_ would be `U`.
 *
 *  Please use {@link isSomeAndForMaybe} generally if you don't have to narrow the type.
 */
export function isSomeAndWithEnsureTypeForMaybe<T, U extends T>(
    input: Maybe<T>,
    predicate: TypePredicateFn<T, U>,
): input is U {
    const ok = isSomeAndForMaybe(input, predicate);
    return ok;
}
