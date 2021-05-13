import { assertIsPromise } from '../internal/assert';
import {
    ERR_MSG_RECOVERER_MUST_RETURN_PROMISE,
    ERR_MSG_TRANSFORMER_MUST_RETURN_PROMISE,
} from '../internal/ErrorMessage';
import type { AsyncTransformFn, AsyncRecoveryFromErrorFn } from '../internal/Function';
import { Result, isOk } from './Result';
import { unwrapFromResult, unwrapErrFromResult } from './unwrap';

/**
 *  Maps a `Result<T, E>` to `U` by applying _transformer_ to a contained `Ok(T)` value in _input_,
 *  or a _recoverer_ function to a contained `Err(E)` value in _input_.
 *  This function can be used to unpack a successful result while handling an error.
 */
export function mapOrElseAsyncForResult<T, E, U>(
    input: Result<T, E>,
    recoverer: AsyncRecoveryFromErrorFn<E, U>,
    transformer: AsyncTransformFn<T, U>
): Promise<U> {
    if (isOk(input)) {
        const inner: T = unwrapFromResult(input);
        const transformed: Promise<U> = transformer(inner);
        // If this is async function, this always return Promise, but not.
        // We should check to clarify the error case if user call this function from plain js
        // and they mistake to use this.
        assertIsPromise(transformed, ERR_MSG_TRANSFORMER_MUST_RETURN_PROMISE);
        return transformed;
    }

    const err: E = unwrapErrFromResult(input);
    const defaultValue: Promise<U> = recoverer(err);
    // If this is async function, this always return Promise, but not.
    // We should check to clarify the error case if user call this function from plain js
    // and they mistake to use this.
    assertIsPromise(defaultValue, ERR_MSG_RECOVERER_MUST_RETURN_PROMISE);
    return defaultValue;
}
