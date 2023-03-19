import { assertIsErrorInstance, assertIsPromise } from '../internal/assert.js';
import {
    ERR_MSG_PRODUCER_MUST_RETURN_PROMISE,
    ERR_MSG_THROWN_VALUE_IS_NOT_BUILTIN_ERROR_INSTANCE,
} from '../internal/error_message.js';
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
export function tryCatchIntoResultAsync<T>(
    producer: AsyncProducerFn<T>
): Promise<Result<T, unknown>> {
    let value: Promise<T>;
    try {
        value = producer();
    } catch (e: unknown) {
        const errWrapped = createErr<unknown>(e);
        return Promise.resolve(errWrapped);
    }

    assertIsPromise(value, ERR_MSG_PRODUCER_MUST_RETURN_PROMISE);

    const wrapped: Promise<Result<T, unknown>> = value.then(createOk, createErr);
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
export function tryCatchIntoResultWithEnsureErrorAsync<T>(
    producer: AsyncProducerFn<T>
): Promise<Result<T, Error>> {
    const result = tryCatchIntoResultAsync(producer);
    const ensured: Promise<Result<T, Error>> = result.then(ensureErrorInResultErr);
    return ensured;
}

function ensureErrorInResultErr<T>(input: Result<T, unknown>): Result<T, Error> {
    const ensured = mapErrForResult(input, checkThrownIsError);
    return ensured;
}

function checkThrownIsError(thrown: unknown): Error {
    assertIsErrorInstance(thrown, ERR_MSG_THROWN_VALUE_IS_NOT_BUILTIN_ERROR_INSTANCE);
    return thrown;
}
