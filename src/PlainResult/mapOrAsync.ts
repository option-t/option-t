import type { MapFn } from '../shared/Function';
import { isErr, Result } from './Result';
import { unwrapFromResult } from './unwrap';

/**
 *  Return the result of _selector_ with using _src_ as an argument for it if _src_ is `Ok(T)`.
 *  Otherwise, return _def_.
 *
 *  Basically, this operation is a combination `mapAsync()` and `unwrapOr()`.
 */
export function mapOrAsyncForResult<T, E, U>(
    src: Result<T, E>,
    def: U,
    selector: MapFn<T, Promise<U>>
): Promise<U> {
    if (isErr(src)) {
        const result: Promise<U> = Promise.resolve(def);
        return result;
    }

    const source: T = unwrapFromResult(src);
    const transformed: Promise<U> = selector(source);
    return transformed;
}
