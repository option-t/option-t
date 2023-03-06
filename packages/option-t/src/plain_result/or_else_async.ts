import type { AsyncRecoveryFromErrorFn } from '../internal/function.js';
import { type Result, isOk } from './result.js';
import { unwrapErrFromResult } from './unwrap.js';

export type ResultAsyncTryRecoveryFromErrorFn<in E, out T, out F> = AsyncRecoveryFromErrorFn<
    E,
    Result<T, F>
>;

/**
 *  Calls _recoverer_ and return its returned value if the result is `Err(E)`,
 *  otherwise returns the `Ok(T)` value of self.
 */
export async function orElseAsyncForResult<T, E, F>(
    input: Result<T, E>,
    recoverer: ResultAsyncTryRecoveryFromErrorFn<E, T, F>
): Promise<Result<T, F>> {
    if (isOk(input)) {
        return input;
    }

    const inner = unwrapErrFromResult(input);
    const defaultValue: Result<T, F> = await recoverer(inner);
    return defaultValue;
}
