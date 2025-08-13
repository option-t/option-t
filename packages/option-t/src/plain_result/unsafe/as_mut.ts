import { assertIsNotFrozen } from '../../internal/assert.js';
import type { Result } from '../core/result.js';
import type { MutResult as InternalMutResult } from '../internal/mutable.js';

/**
 *  This allows to mutate the value to save needless allocation.
 *
 *  We don't define `MutOk<T>` or `MutErr` because we can always mutable properties on `MutResult<T>`.
 *  This means that it's hard to check the type on static type system.
 */
export type MutResult<T, E> = InternalMutResult<T, E>;

/**
 *  @throws
 *  This throw an `Error` instance if the _input_ is frozen.
 */
export function unsafeAsMutResult<T, E>(input: Result<T, E>): MutResult<T, E> {
    assertIsNotFrozen(input);
    return input as MutResult<T, E>;
}
