import { Mutable } from '../internal/Mutable';
import { Result } from './Result';

/**
 *  This allows to mutate the value to save needless allocation.
 *
 *  We don't define `MutOk<T>` or `MutErr` because we can always mutable properties on `MutResult<T>`.
 *  This means that it's hard to check the type on static type system.
 */
export type MutResult<T, E> = Mutable<Result<T, E>>;

export function asMutResult<T, E>(input: Result<T, E>): MutResult<T, E> {
    return input as MutResult<T, E>;
}
