import type { MapFn } from '../shared/Function';
import { Result, createErr, isOk, Ok } from './Result';

/**
 *  Maps a `Result<T, E>` to `Result<T, F>` by applying a _selector_ function `mapFn<E, F>`
 *  to an contained `Err(E)` value, leaving an `Ok(T)` value untouched.
 *
 *  This function can be used to pass through a successful result while handling an error.
 */
export function mapErrAsyncForResult<T, E, F>(
    src: Result<T, E>,
    selector: MapFn<E, Promise<F>>
): Promise<Result<T, F>> {
    if (isOk(src)) {
        const s: Ok<T> = src;
        return Promise.resolve(s);
    }

    const transformed: Promise<F> = selector(src.err);
    const result: Promise<Result<T, F>> = transformed.then(createErr);
    return result;
}
