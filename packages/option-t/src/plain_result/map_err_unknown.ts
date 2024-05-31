import { CausalCarrierError } from './internal/causal_carrier.js';
import { mapErrForResult } from './map_err.js';
import type { Result } from './result.js';

export function mapErrUnknownToError<T>(input: Result<T, unknown>): Result<T, Error> {
    const result = mapErrForResult<T, unknown, Error>(input, transformUnknownCausalToError);
    return result;
}

function transformUnknownCausalToError(cause: unknown): Error {
    if (cause instanceof Error) {
        return cause;
    }

    const wrapper = new CausalCarrierError(cause);
    return wrapper;
}

export function mapErrUnknownToCausalCarrierError<T>(
    input: Result<T, unknown>,
): Result<T, CausalCarrierError<unknown>> {
    const result = mapErrForResult<T, unknown, CausalCarrierError<unknown>>(
        input,
        transformUnknownCausalToError2,
    );
    return result;
}

function transformUnknownCausalToError2(cause: unknown): CausalCarrierError<unknown> {
    const wrapper = new CausalCarrierError(cause);
    return wrapper;
}
