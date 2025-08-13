import type { AsyncTransformFn } from '../../internal/function.js';
import { type Nullable, isNull } from '../core/nullable.js';

export type NullableAsyncTryTransformFn<in T, out U> = AsyncTransformFn<T, Nullable<U>>;

/**
 *  Returns `null` if the _input_ is `null`,
 *  otherwise calls _transformer_ with the value and returns the result.
 *
 *  XXX:
 *  Some languages call this operation flatmap.
 *  But we don't provide `flatMap()` as alias of this function.
 *  because it's too hard to undarstand that "flatMap" operation for `T | null`
 */
export async function andThenAsyncForNullable<T, U>(
    input: Nullable<T>,
    transformer: NullableAsyncTryTransformFn<T, U>,
): Promise<Nullable<U>> {
    if (isNull(input)) {
        return null;
    }

    const result: Nullable<U> = await transformer(input);
    return result;
}
