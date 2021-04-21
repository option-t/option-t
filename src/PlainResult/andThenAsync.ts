import { assertIsPromise } from '../shared/assert';
import { ERR_MSG_TRANSFORMER_MUST_RETURN_PROMISE } from '../shared/ErrorMessage';
import type { MapFn } from '../shared/Function';
import { Result, isErr } from './Result';
import { unwrapFromResult } from './unwrap';

export type AsyncFlatmapOkFn<T, U, E> = MapFn<T, Promise<Result<U, E>>>;

/**
 *  Returns `Promise<Err(E)>` if the _src_ is `Err(E)`,
 *  otherwise calls _transformer_ with the value and returns the result.
 *
 *  XXX:
 *  Some languages call this operation flatmap.
 *  But we don't provide `flatMap()` as alias of this function
 *  to sort with other APIs.
 */
export function andThenAsyncForResult<T, U, E>(
    src: Result<T, E>,
    transformer: AsyncFlatmapOkFn<T, U, E>
): Promise<Result<U, E>> {
    if (isErr(src)) {
        return Promise.resolve(src);
    }

    const source: T = unwrapFromResult(src);
    const transformed: Promise<Result<U, E>> = transformer(source);
    // If this is async function, this always return Promise, but not.
    // We should check to clarify the error case if user call this function from plain js
    // and they mistake to use this.
    assertIsPromise(transformed, ERR_MSG_TRANSFORMER_MUST_RETURN_PROMISE);
    return transformed;
}
