import { assertIsPromise } from '../internal/assert.js';
import { ERR_MSG_TRANSFORMER_MUST_RETURN_PROMISE } from '../internal/ErrorMessage.js';
import type { AsyncTransformFn } from '../internal/Function.js';
import { Nullable, isNull } from './Nullable.js';

export type NullableAsyncTryTransformFn<T, U> = AsyncTransformFn<T, Nullable<U>>;

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

    const result: Promise<Nullable<U>> = transformer(input);
    // If this is async function, this always return Promise, but not.
    // We should check to clarify the error case if user call this function from plain js
    // and they mistake to use this.
    assertIsPromise(result, ERR_MSG_TRANSFORMER_MUST_RETURN_PROMISE);
    return result;
}
