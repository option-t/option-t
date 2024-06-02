import { assertIsErrorInstance } from '../internal/assert.js';
import type { AsyncProducerFn } from '../internal/function.js';
import { ERR_MSG_THROWN_VALUE_IS_NOT_BUILTIN_ERROR_INSTANCE } from './internal/error_message.js';
import { wrapWithNewErrorIfCausalIsUnknown } from './internal/unknown_causal_carrier.js';
import { mapErrForResult } from './map_err.js';
import { type Result, createOk, createErr } from './result.js';

/**
 *  This function converts the returend value from _producer_ into `Ok(T)`.
 *  If _producer_ throw a something, this returns it with wrapping `Err(unknown)`.
 *
 *  NOTE:
 *  1. An user should narrow the scope of _producer_ to make it predictable that is in `Err(E)`.
 *  2. Basically, we don't recomment to use this to create a `Result<T, E>`.
 *     Generally, you should define an `Err(E)` by depending on an use case context
 *     Use this operator just to make a bridge to existing codebase
 *     that you cannot inspect deeply to details.
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
 *  - This function converts the returend value from _producer_ into `Ok(T)`.
 *  - If _producer_ throw a value that is an instance of `Error` of **current [realm][realm]**,
 *    this returns it with wrapping `Err(Error)`.
 *  - Otherwise, if _producer_ throw a value that is **not** an instance of current realm including
 *    a one created from cross-ream `Error` constructor (e.g. `node:vm`, iframe),
 *    then this operator creates a new `Error` object created from the current realm's constructor
 *    and the thrown value to its `Error.cause`, make it `Err(Error)`, and return it finally.
 *
 *  [realm]: https://262.ecma-international.org/14.0/#realm
 *
 *
 *
 * -----
 *
 *  NOTE:
 *  1. An user should narrow the scope of _producer_ to make it predictable that is in `Err(E)`.
 *  2. This function requires ES2022's `Error.cause` to get an actual thrown object.
 *  3. Basically, we don't recomment to use this to create a `Result<T, E>`.
 *     Generally, you should define an `Err(E)` by depending on an use case context
 *     Use this operator just to make a bridge to existing codebase
 *     that you cannot inspect deeply to details.
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

/**
 *  - This function converts the returend value from _producer_ into `Ok(T)`.
 *  - If _producer_ throw an `Error` instance of **current [realm][realm]**,
 *    this returns it with wrapping `Err(Error)`.
 *
 *  @throws {TypeError}
 *      This throws it if _producer_ throw the value that is not an instance of `Error` constructor of **current [realm][realm]**.
 *
 *  [realm]: https://262.ecma-international.org/14.0/#realm
 *
 *  Probably, we might deprecate this operator for the future.
 *  Please consider to use {@link tryCatchIntoResultWithEnsureErrorAsync} too.
 *
 * -----
 *
 *  This just returns it directly if the thrown value is an `Error` instance of the current realm.
 *  We can do this due to that we can regard it is happen in the same operation step to throw a value
 *  unlike the combination of `tryCatchIntoResult` + `mapErrForResult`.
 *  This shortcut can reduce an unnecessary `Error.cause` chain.
 *
 * -----
 *
 *  NOTE:
 *  1. An user should narrow the scope of _producer_ to make it predictable that is in `Err(E)`.
 *  2. This function requires ES2022's `Error.cause` to get an actual thrown object.
 *  3. Basically, we don't recomment to use this to create a `Result<T, E>`.
 *     Generally, you should define an `Err(E)` by depending on an use case context
 *     Use this operator just to make a bridge to existing codebase
 *     that you cannot inspect deeply to details.
 */
export async function tryCatchIntoResultWithAssertErrorAsync<T>(
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
