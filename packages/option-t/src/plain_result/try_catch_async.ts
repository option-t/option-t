import { assertIsErrorInstance } from '../internal/assert.js';
import { ERR_MSG_THROWN_VALUE_IS_NOT_BUILTIN_ERROR_INSTANCE } from '../internal/error_message.js';
import type { AsyncProducerFn } from '../internal/function.js';
import { mapErrForResult } from './map_err.js';
import { type Result, createOk, createErr } from './result.js';

/**
 *  This function converts the returend value from _producer_ into `Ok(TValue)`.
 *  If _producer_ throw a something, this returns it with wrapping `Err(unknown)`.
 *
 *  NOTE:
 *  An user should narrow the scope of _producer_ to make it predictable that is in `Err(E)`.
 */
export async function tryCatchIntoResultAsync<T>(
    producer: AsyncProducerFn<T>,
): Promise<Result<T, unknown>> {
    let value: T;
    try {
        value = await producer();
    } catch (e: unknown) {
        const errWrapped = createErr<unknown>(e);
        return errWrapped;
    }

    const wrapped: Result<T, unknown> = createOk(value);
    return wrapped;
}

/**
 *  - This function converts the returend value from _producer_ into `Ok(TValue)`.
 *  - If _producer_ throw an `Error` instance, this returns it with wrapping `Err(Error)`.
 *  - Otherwise, If _producer_ throw a not `Error` instance, then this throw `TypeError`.
 *
 *  NOTE:
 *  1. An user should narrow the scope of _producer_ to make it predictable that is in `Err(E)`.
 *  2. This function requires ES2022's `Error.cause` to get an actual thrown object.
 */
export async function tryCatchIntoResultWithEnsureErrorAsync<T>(
    producer: AsyncProducerFn<T>,
): Promise<Result<T, Error>> {
    const result: Result<T, unknown> = await tryCatchIntoResultAsync(producer);
    const ensured: Result<T, Error> = mapErrForResult(result, checkThrownIsError);
    return ensured;
}

function checkThrownIsError(thrown: unknown): Error {
    assertIsErrorInstance(thrown, ERR_MSG_THROWN_VALUE_IS_NOT_BUILTIN_ERROR_INSTANCE);
    return thrown;
}
