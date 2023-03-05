import { assertIsErrorInstance } from '../internal/assert.js';
import { ERR_MSG_THROWN_VALUE_IS_NOT_BUILTIN_ERROR_INSTANCE } from '../internal/error_message.js';
import type { ProducerFn } from '../internal/function.js';
import { type Result, createOk, createErr } from './Result.js';

/**
 *  This function converts the returend value from _producer_ into `Ok(TValue)`.
 *  If _producer_ throw a something, this returns it with wrapping `Err(unknown)`.
 *
 *  NOTE:
 *  An user should narrow the scope of _producer_ to make it predictable that is in `Err(E)`.
 */
export function tryCatchIntoResult<T>(producer: ProducerFn<T>): Result<T, unknown> {
    try {
        const value: T = producer();
        const ok = createOk<T>(value);
        return ok;
    } catch (e: unknown) {
        const err = createErr<unknown>(e);
        return err;
    }
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
export function tryCatchIntoResultWithEnsureError<T>(producer: ProducerFn<T>): Result<T, Error> {
    try {
        const value: T = producer();
        const ok = createOk<T>(value);
        return ok;
    } catch (e: unknown) {
        assertIsErrorInstance(e, ERR_MSG_THROWN_VALUE_IS_NOT_BUILTIN_ERROR_INSTANCE);
        const err = createErr<Error>(e);
        return err;
    }
}
