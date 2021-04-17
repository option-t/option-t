import type { MapFn } from '../shared/Function';
import { Result, isErr } from './Result';
import { unwrapFromResult } from './unwrap';

export type AsyncFlatmapOkFn<T, U, E> = MapFn<T, Promise<Result<U, E>>>;

/**
 *  Returns `Promise<Err(E)>` if the _src_ is `Err(E)`,
 *  otherwise calls _selector_ with the value and returns the result.
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
    const result: Promise<Result<U, E>> = transformer(source);
    return result;
}
