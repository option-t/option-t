import { assertIsPromise } from '../shared/assert';
import { ERR_MSG_RECOVERER_MUST_RETURN_PROMISE } from '../shared/ErrorMessage';
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
    const defaultValue: Promise<Result<T, F>> = recoverer(inner);
    // If this is async function, this always return Promise, but not.
    // We should check to clarify the error case if user call this function from plain js
    // and they mistake to use this.
    assertIsPromise(defaultValue, ERR_MSG_RECOVERER_MUST_RETURN_PROMISE);
    return defaultValue;
}
