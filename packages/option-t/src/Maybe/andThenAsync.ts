import { assertIsPromise } from '../internal/assert.js';
import { ERR_MSG_TRANSFORMER_MUST_RETURN_PROMISE } from '../internal/error_message.js';
import type { AsyncTransformFn } from '../internal/function.js';

import { type Maybe, isNullOrUndefined } from './Maybe.js';

export type MaybeAsyncTryTransformFn<in T, out U> = AsyncTransformFn<T, Maybe<U>>;

/**
 *  Returns `null` or `undefined` if the _input_ is `null` or `undefined`,
 *  otherwise calls _transformer_ with the value and returns the result.
 *
 *  XXX:
 *  Some languages call this operation flatmap.
 *  But we don't provide `flatMap()` as alias of this function.
 *  because it's too hard to undarstand that "flatMap" operation for `T | null | undefined`.
 */
export function andThenAsyncForMaybe<T, U>(
    input: Maybe<T>,
    transformer: MaybeAsyncTryTransformFn<T, U>
): Promise<Maybe<U>> {
    if (isNullOrUndefined(input)) {
        return Promise.resolve(input);
    }

    const result: Promise<Maybe<U>> = transformer(input);

    // If this is async function, this always return Promise, but not.
    // We should check to clarify the error case if user call this function from plain js
    // and they mistake to use this.
    assertIsPromise(result, ERR_MSG_TRANSFORMER_MUST_RETURN_PROMISE);

    return result;
}
