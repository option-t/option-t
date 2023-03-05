import { assertIsPromise } from '../internal/assert.js';
import { ERR_MSG_TRANSFORMER_MUST_RETURN_PROMISE } from '../internal/error_message.js';
import type { AsyncTransformFn } from '../internal/function.js';

import { type Undefinable, isUndefined } from './undefinable_.js';

export type UndefinableAsyncTryTransformFn<in T, out U> = AsyncTransformFn<T, Undefinable<U>>;

/**
 *  Returns `undefined` if the _input_ is `undefined`,
 *  otherwise calls _transformer_ with the value and returns the result.
 *
 *  XXX:
 *  Some languages call this operation flatmap.
 *  But we don't provide `flatMap()` as alias of this function.
 *  because it's too hard to undarstand that "flatMap" operation for `T | undefined`
 */
export function andThenAsyncForUndefinable<T, U>(
    input: Undefinable<T>,
    transformer: UndefinableAsyncTryTransformFn<T, U>
): Promise<Undefinable<U>> {
    if (isUndefined(input)) {
        return Promise.resolve<Undefinable<U>>(input);
    }

    const result: Promise<Undefinable<U>> = transformer(input);
    // If this is async function, this always return Promise, but not.
    // We should check to clarify the error case if user call this function from plain js
    // and they mistake to use this.
    assertIsPromise(result, ERR_MSG_TRANSFORMER_MUST_RETURN_PROMISE);
    return result;
}
