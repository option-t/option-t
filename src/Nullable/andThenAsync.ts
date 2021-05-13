import { assertIsPromise } from '../internal/assert';
import { ERR_MSG_TRANSFORMER_MUST_RETURN_PROMISE } from '../internal/ErrorMessage';
import type { AsyncTransformFn } from '../internal/Function';
import { Nullable, isNull } from './Nullable';

export type NullableAsyncTryTransformFn<T, U> = AsyncTransformFn<T, Nullable<U>>;

/**
 *  @deprecated Use NullableAsyncTryTransformFn in the same module.
 */
export type AsyncFlatmapFn<T, U> = NullableAsyncTryTransformFn<T, U>;

/**
 *  Returns `null` if the _input_ is `null`,
 *  otherwise calls _transformer_ with the value and returns the result.
 *
 *  XXX:
 *  Some languages call this operation flatmap.
 *  But we don't provide `flatMap()` as alias of this function.
 *  because it's too hard to undarstand that "flatMap" operation for `T | null`
 */
export function andThenAsyncForNullable<T, U>(
    input: Nullable<T>,
    transformer: NullableAsyncTryTransformFn<T, U>
): Promise<Nullable<U>> {
    if (isNull(input)) {
        return Promise.resolve<Nullable<U>>(input);
    }

    const transformed: Promise<Nullable<U>> = transformer(input);
    // If this is async function, this always return Promise, but not.
    // We should check to clarify the error case if user call this function from plain js
    // and they mistake to use this.
    assertIsPromise(transformed, ERR_MSG_TRANSFORMER_MUST_RETURN_PROMISE);
    return transformed;
}
