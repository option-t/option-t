import type { FilterFn, TypePredicateFn } from '../../internal/function.js';
import { type Undefinable, isNotUndefined, type NotUndefined } from '../core/undefinable.js';

/**
 *  Returns `undefined` if the _input_ is `undefined`,
 *  otherwise calls _predicate_ with the _input_ `T` and returns:
 *
 *      * `T` if _predicate_ returns `true`.
 *      * `undefined` if _predicate_ returns `false`.
 */
export function filterForUndefinable<T>(
    input: Undefinable<T>,
    predicate: FilterFn<T>,
): Undefinable<T> {
    if (isNotUndefined(input)) {
        const ok: boolean = predicate(input);
        if (ok) {
            return input;
        }
    }

    return undefined;
}

/**
 *  Returns `undefined` if the _input_ is `undefined`,
 *  otherwise calls _predicate_ with the _input_ `T` and returns:
 *
 *      * The input value as `U` if _predicate_ returns `true` which means that _predicate_ says the input value is U.
 *      * `undefined` if _predicate_ returns `false`.
 *
 *  Please use {@link filterForUndefinable} generally if you don't have to narrow the type.
 */
export function filterWithEnsureTypeForUndefinable<T, U extends T>(
    input: Undefinable<T>,
    predicate: TypePredicateFn<T, NotUndefined<U>>,
): Undefinable<U> {
    if (isNotUndefined(input)) {
        if (predicate(input)) {
            const result: NotUndefined<U> = input;
            return result;
        }
    }

    return undefined;
}
