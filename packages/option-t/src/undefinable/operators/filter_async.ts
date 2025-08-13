import type { AsyncFilterFn } from '../../internal/function.js';
import { type Undefinable, isNotUndefined } from '../core/undefinable.js';

/**
 *  Returns `undefined` if the _input_ is `undefined`,
 *  otherwise calls _predicate_ with the _input_ `T` and returns:
 *
 *      * `T` if _predicate_ returns `true`.
 *      * `undefined` if _predicate_ returns `false`.
 */
export async function filterAsyncForUndefinable<T>(
    input: Undefinable<T>,
    predicate: AsyncFilterFn<T>,
): Promise<Undefinable<T>> {
    if (isNotUndefined(input)) {
        const ok: boolean = await predicate(input);
        if (ok) {
            return input;
        }
    }

    return undefined;
}
