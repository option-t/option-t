import type { FilterFn, TypePredicateFn } from '../internal/function.js';
import { type Maybe, isNotNullOrUndefined } from './maybe.js';

/**
 *  Returns `undefined` if the _input_ is `null` or `undefined`,
 *  otherwise calls _predicate_ with the _input_ `T` and returns:
 *
 *      * `T` if _predicate_ returns `true`.
 *      * `nundefined` if _predicate_ returns `false`.
 */
export function filterForMaybe<T>(input: Maybe<T>, predicate: FilterFn<T>): Maybe<T> {
    if (isNotNullOrUndefined(input)) {
        const ok: boolean = predicate(input);
        if (ok) {
            return input;
        }
    }

    return undefined;
}

/**
 *  Returns `undefined` if the _input_ is `null` or `undefined`,
 *  otherwise calls _predicate_ with the _input_ `T` and returns:
 *
 *      * `I` if _predicate_ returns `true` which means that _predicate_ says the input value is U.
 *      * `undefined` if _predicate_ returns `false`.
 *
 *  Please use {@link filterForMaybe} generally if you don't have to narrow the type.
 */
export function filterWithEnsureTypeForMaybe<T, U extends T>(
    input: Maybe<T>,
    predicate: TypePredicateFn<T, U>,
): Maybe<U> {
    if (isNotNullOrUndefined(input)) {
        if (predicate(input)) {
            const result: Maybe<U> = input;
            return result;
        }
    }

    return undefined;
}
