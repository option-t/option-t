import { andThenForResult } from './and_then.js';
import type { Result } from './result.js';

function flatten<T, E>(input: Result<T, E>): Result<T, E> {
    return input;
}

/**
 * Converts from `Result<Result<T, E>, E>` to `Result<T, E>`
 */
export function flattenForResult<T, E>(input: Result<Result<T, E>, E>): Result<T, E> {
    const result: Result<T, E> = andThenForResult(input, flatten);
    return result;
}
