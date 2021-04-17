import type { MapFn } from '../shared/Function';
import { mapOrElseForResult } from './mapOrElse';
import { Result, createErr, Err } from './Result';

export type AsyncFlatmapOkFn<T, U, E> = MapFn<T, Promise<Result<U, E>>>;

async function crateErrPromise<E>(e: E): Promise<Err<E>> {
    const err = createErr(e);
    return err;
}

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
    selector: AsyncFlatmapOkFn<T, U, E>
): Promise<Result<U, E>> {
    const result: Promise<Result<U, E>> = mapOrElseForResult(src, crateErrPromise, selector);
    return result;
}
