import { type Result, createOk, createErr } from './result.js';

/**
 *  Convert {@link PromiseSettledResult<T>} returned by {@link Promise.allSettled} to {@link Result}
 */
export function fromPromiseSettledResultToResult<T>(
    input: PromiseSettledResult<T>
): Result<T, unknown> {
    const status = input.status;
    switch (status) {
        case 'fulfilled': {
            const value = input.value;
            const ok = createOk(value);
            return ok;
        }
        case 'rejected': {
            const reason = input.reason;
            const err = createErr(reason);
            return err;
        }
        default: {
            const statusStr = String(status);
            const message = `\`PromiseSettledResult.status=${statusStr}\` is not supported`;
            throw new TypeError(message);
        }
    }
}
