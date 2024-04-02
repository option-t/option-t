import type { FilterFn } from '../internal/function.js';
import { type Nullable, isNull } from './nullable.js';

/**
 *  Returns `null` if the option is `null`,
 *  otherwise the result should be resolved by the result of _predicate_ with the wrapped value as the arguments:
 *
 *      * `T` if _predicate_ returns `true`.
 *      * `null` if _predicate_ returns `false`.
 */
export function filterForNullable<T>(input: Nullable<T>, predicate: FilterFn<T>): Nullable<T> {
    if (isNull(input)) {
        return input;
    }

    const ok: boolean = predicate(input);
    if (!ok) {
        return null;
    }

    const result: Nullable<T> = input;
    return result;
}
