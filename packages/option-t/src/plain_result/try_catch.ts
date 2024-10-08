import type { ProducerFn } from '../internal/function.js';
import { unsafeUnwrapValueInErrWithoutAnyCheck } from './internal/intrinsics_unsafe.js';
import { wrapWithNewErrorIfCausalIsUnknown } from './internal/unknown_causal_carrier.js';
import { type Result, createOk, createErr, isOk } from './result.js';

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
export function tryCatchIntoResult<T>(producer: ProducerFn<T>): Result<T, unknown> {
    try {
        const value: T = producer();
        const okWrapped = createOk<T>(value);
        return okWrapped;
    } catch (e: unknown) {
        const errWrapped = createErr<unknown>(e);
        return errWrapped;
    }
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
export function tryCatchIntoResultWithEnsureError<T>(producer: ProducerFn<T>): Result<T, Error> {
    const result = tryCatchIntoResult(producer);
    if (isOk(result)) {
        return result;
    }

    const thrown: unknown = unsafeUnwrapValueInErrWithoutAnyCheck<unknown>(result);
    const causal: Error = wrapWithNewErrorIfCausalIsUnknown(thrown);
    const errWrapped = createErr<Error>(causal);
    return errWrapped;
}
