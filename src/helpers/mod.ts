import { type Result, createOk, createErr, isOk } from '../PlainResult/Result';
import { unwrapOkFromResult, unwrapErrFromResult } from '../PlainResult/unwrap';

/**
 *  This function converts the returend value of _fn_ into `Ok(TValue)`.
 *  If _fn_ throw an error, this returns `Err(E)`.
 *  An user should narrow the scope of _fn_ to make it predictable that is in `Err(E)`.
 */
export function tryCatchIntoResult<T, E = unknown>(fn: () => T): Result<T, E> {
    try {
        const value: T = fn();
        return createOk(value);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
        return createErr<E>(e);
    }
}

class NotErrorInstanceError extends TypeError {}

/**
 *  This means that we do not recommend to use this method frequently.
 *  Generally, it's better to handle a thrown error in the near place which throw it.
 *  Please keep to use this to make compatible with other parts that don't use `Result<T, E>`.
 */
export function unwrapOrThrowInnerIfErr<T, E extends Error>(result: Result<T, E>): T {
    if (isOk(result)) {
        const val = unwrapOkFromResult(result);
        return val;
    }

    const e = unwrapErrFromResult(result);
    if (!(e instanceof Error)) {
        const message = `${String(e)} is not Error instance. This function can throw Error`;
        throw new NotErrorInstanceError(message);
    }
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw e;
}

export function convertFromPromiseSettledResultToPlainResult<T>(
    input: PromiseSettledResult<T>
): Result<T, unknown> {
    switch (input.status) {
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
        default:
            throw new TypeError();
    }
}
