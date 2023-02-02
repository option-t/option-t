import { assertIsPromise } from '../internal/assert.js';
import { ERR_MSG_TRANSFORMER_MUST_RETURN_PROMISE } from '../internal/ErrorMessage.js';
import type { AsyncTransformFn } from '../internal/Function.js';

import { type Undefinable, isUndefined } from './Undefinable.js';

export type UndefinableAsyncTryTransformFn<T, U> = AsyncTransformFn<T, Undefinable<U>>;

/**
 *  Returns `undefined` if the _input_ is `undefined`,
 *  otherwise calls _transformer_ with the value and returns the result.
 *
 *  XXX:
 *  Some languages call this operation flatmap.
 *  But we don't provide `flatMap()` as alias of this function.
 *  because it's too hard to undarstand that "flatMap" operation for `T | undefined`
 */
export async function andThenAsyncForUndefinable<T, U>(
    input: Undefinable<T>,
    transformer: UndefinableAsyncTryTransformFn<T, U>
): Promise<Undefinable<U>> {
    if (isUndefined(input)) {
        return input;
    }

    const result: Promise<Undefinable<U>> = transformer(input);
    // If this is async function, this always return Promise, but not.
    // We should check to clarify the error case if user call this function from plain js
    // and they mistake to use this.
    assertIsPromise(result, ERR_MSG_TRANSFORMER_MUST_RETURN_PROMISE);
    return result;
}
