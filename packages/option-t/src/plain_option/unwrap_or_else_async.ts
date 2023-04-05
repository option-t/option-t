import type { AsyncRecoveryFn } from '../internal/function.js';
import { type Option, isSome, unwrapSome } from './option.js';

/**
 *  Unwraps a result _input_, returns the content of an `Some(T)`.
 *  If the value is an `None` then it calls `def` with its value.
 */
export async function unwrapOrElseAsyncFromOption<T>(
    input: Option<T>,
    recoverer: AsyncRecoveryFn<T>
): Promise<T> {
    if (isSome(input)) {
        const val: T = unwrapSome(input);
        return val;
    }

    const defaultValue: T = await recoverer();
    return defaultValue;
}
