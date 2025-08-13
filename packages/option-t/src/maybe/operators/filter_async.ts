import type { AsyncFilterFn } from '../../internal/function.js';
import { type Maybe, isNotNullOrUndefined } from '../core/maybe.js';

/**
 *  Returns `undefined` if the _input_ is `null` or `undefined`,
 *  otherwise calls _predicate_ with the value `T` and returns:
 *
 *      * `T` if _predicate_ returns `true`.
 *      * `undefined` if _predicate_ returns `false`.
 */
export async function filterAsyncForMaybe<T>(
    input: Maybe<T>,
    predicate: AsyncFilterFn<T>,
): Promise<Maybe<T>> {
    if (isNotNullOrUndefined(input)) {
        const ok: boolean = await predicate(input);
        if (ok) {
            return input;
        }
    }

    return undefined;
}
