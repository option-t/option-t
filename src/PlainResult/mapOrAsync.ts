import type { MapFn } from '../shared/Function';
import type { Result } from './Result';
import { mapAsyncForResult } from './mapAsync';
import { unwrapOrFromResult } from './unwrapOr';

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
    const transformed = mapAsyncForResult(src, selector)
    const result = transformed.then((transformed) => {
        return unwrapOrFromResult(transformed, def);
    });
    
    return result;
}
