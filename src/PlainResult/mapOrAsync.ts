import { assertIsPromise } from '../shared/assert';
import { ERR_MSG_TRANSFORMER_MUST_RETURN_PROMISE } from '../shared/ErrorMessage';
import type { MapFn } from '../shared/Function';
import { isErr, Result } from './Result';
import { unwrapFromResult } from './unwrap';

/**
 *  Return the result of _transformer_ with using _src_ as an argument for it if _src_ is `Ok(T)`.
 *  Otherwise, return _def_.
 *
 *  Basically, this operation is a combination `mapAsync()` and `unwrapOr()`.
 */
export function mapOrAsyncForResult<T, E, U>(
    src: Result<T, E>,
    def: U,
    transformer: MapFn<T, Promise<U>>
): Promise<U> {
    if (isErr(src)) {
        const result: Promise<U> = Promise.resolve(def);
        return result;
    }

    const source: T = unwrapFromResult(src);
    const transformed: Promise<U> = transformer(source);
    // If this is async function, this always return Promise, but not.
    // We should check to clarify the error case if user call this function from plain js
    // and they mistake to use this.
    assertIsPromise(transformed, ERR_MSG_TRANSFORMER_MUST_RETURN_PROMISE);
    return transformed;
}
