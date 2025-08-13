import type { AsyncFilterFn } from '../../internal/function.js';
import { type Nullable, isNotNull } from '../core/nullable.js';

/**
 *  Returns `null` if the _input_ is `null`,
 *  otherwise calls _predicate_ with the value `T` and returns:
 *
 *      * `T` if _predicate_ returns `true`.
 *      * `null` if _predicate_ returns `false`.
 */
export async function filterAsyncForNullable<T>(
    input: Nullable<T>,
    predicate: AsyncFilterFn<T>,
): Promise<Nullable<T>> {
    if (isNotNull(input)) {
        const ok: boolean = await predicate(input);
        if (ok) {
            return input;
        }
    }

    return null;
}
