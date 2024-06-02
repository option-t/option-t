import type { AsyncProducerFn } from '../../internal/function.js';
import { wrapWithNewErrorIfCausalIsUnknown } from '../internal/unknown_causal_carrier.js';
import { mapErrForResult } from '../map_err.js';
import type { Result } from '../result.js';
import { tryCatchIntoResultAsync } from '../try_catch_async.js';

/**
 *  @experimental
 *  We might change this without any breaking changes.
 *  See https://github.com/option-t/option-t/issues/2296
 */
export async function tryCatchIntoResultWithEnsureErrorAsync<T>(
    producer: AsyncProducerFn<T>,
): Promise<Result<T, Error>> {
    const result = await tryCatchIntoResultAsync(producer);
    const mapped: Result<T, Error> = mapErrForResult<T, unknown, Error>(
        result,
        wrapWithNewErrorIfCausalIsUnknown,
    );
    return mapped;
}
