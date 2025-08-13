import { type Result, createOk, createErr } from '../core/result.js';

/**
 *  Convert {@link PromiseSettledResult<T>} returned by {@link Promise.allSettled} to {@link Result}
 */
export function fromPromiseSettledResultToResult<T>(
    input: PromiseSettledResult<T>,
): Result<T, unknown> {
    const status = input.status;
    switch (status) {
        case 'fulfilled': {
            const value = input.value;
            const okWrapped = createOk(value);
            return okWrapped;
        }
        case 'rejected': {
            const reason = input.reason;
            const errWrapped = createErr(reason);
            return errWrapped;
        }
        default: {
            const statusStr = String(status);
            const message = `\`PromiseSettledResult.status=${statusStr}\` is not supported`;
            throw new TypeError(message);
        }
    }
}
