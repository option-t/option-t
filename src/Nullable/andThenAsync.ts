import { assertIsPromise } from '../shared/assert';
import { ERR_MSG_TRANSFORMER_MUST_RETURN_PROMISE } from '../shared/ErrorMessage';
import type { MapFn } from '../shared/Function';
import { Nullable, isNull } from './Nullable';

export type AsyncFlatmapFn<T, U> = MapFn<T, Promise<Nullable<U>>>;

/**
 *  Returns `null` if the _src_ is `null`,
 *  otherwise calls _transformer_ with the value and returns the result.
 *
 *  XXX:
 *  Some languages call this operation flatmap.
 *  But we don't provide `flatMap()` as alias of this function.
 *  because it's too hard to undarstand that "flatMap" operation for `T | null`
 */
export function andThenAsyncForNullable<T, U>(
    src: Nullable<T>,
    transformer: AsyncFlatmapFn<T, U>
): Promise<Nullable<U>> {
    if (isNull(src)) {
        return Promise.resolve<Nullable<U>>(src);
    }

    const transformed: Promise<Nullable<U>> = transformer(src);
    // If this is async function, this always return Promise, but not.
    // We should check to clarify the error case if user call this function from plain js
    // and they mistake to use this.
    assertIsPromise(transformed, ERR_MSG_TRANSFORMER_MUST_RETURN_PROMISE);
    return transformed;
}
