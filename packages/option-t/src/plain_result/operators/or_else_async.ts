import type { AsyncRecoveryFromErrorFn } from '../../internal/function.js';
import { type Result, isOk } from '../core/result.js';
import { unsafeUnwrapValueInErrWithoutAnyCheck } from '../internal/intrinsics_unsafe.js';

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
    recoverer: ResultAsyncTryRecoveryFromErrorFn<E, T, F>,
): Promise<Result<T, F>> {
    if (isOk(input)) {
        return input;
    }

    const inner = unsafeUnwrapValueInErrWithoutAnyCheck(input);
    const defaultValue: Result<T, F> = await recoverer(inner);
    return defaultValue;
}
