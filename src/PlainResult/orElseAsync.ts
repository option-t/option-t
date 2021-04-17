import type { MapFn } from '../shared/Function';
import { Result, isOk } from './Result';
import { unwrapErrFromResult } from './unwrap';

export type AsyncFlatmapErrFn<T, E, F> = MapFn<E, Promise<Result<T, F>>>;

/**
 *  Calls _recoverer_ and return its returned value if the result is `Err(E)`,
 *  otherwise returns the `Ok(T)` value of self.
 */
export function orElseAsyncForResult<T, E, F>(
    src: Result<T, E>,
    recoverer: AsyncFlatmapErrFn<T, E, F>
): Promise<Result<T, F>> {
    if (isOk(src)) {
        return Promise.resolve(src);
    }

    const inner = unwrapErrFromResult(src);
    const result: Promise<Result<T, F>> = recoverer(inner);
    return result;
}
