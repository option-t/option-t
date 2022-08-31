import type { ProducerFn } from '../internal/Function.js';
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
