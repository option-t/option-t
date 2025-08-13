import type { FilterFn, TypePredicateFn } from '../../internal/function.js';
import { type Nullable, isNotNull, type NotNull } from '../core/nullable.js';

/**
 *  Returns `null` if the _input_ is `null`,
 *  otherwise calls _predicate_ with the _input_ `T` and returns:
 *
 *      * `T` if _predicate_ returns `true`.
 *      * `null` if _predicate_ returns `false`.
 */
export function filterForNullable<T>(input: Nullable<T>, predicate: FilterFn<T>): Nullable<T> {
    if (isNotNull(input)) {
        const ok: boolean = predicate(input);
        if (ok) {
            return input;
        }
    }

    return null;
}

/**
 *  Returns `null` if the _input_ is `null`,
 *  otherwise calls _predicate_ with the _input_ `T` and returns:
 *
 *      * The input value as `U` if _predicate_ returns `true` which means that _predicate_ says the input value is U.
 *      * `null` if _predicate_ returns `false`.
 *
 *  Please use {@link filterForNullable} generally if you don't have to narrow the type.
 */
export function filterWithEnsureTypeForNullable<T, U extends T>(
    input: Nullable<T>,
    predicate: TypePredicateFn<T, NotNull<U>>,
): Nullable<U> {
    if (isNotNull(input)) {
        if (predicate(input)) {
            const result: NotNull<U> = input;
            return result;
        }
    }

    return null;
}
