import type { AsyncTransformFn, AsyncRecoveryFn } from '../shared/Function';
import type { Nullable } from './Nullable';
import { mapAsyncForNullable } from './mapAsync';
import { unwrapOrElseAsyncFromNullable } from './unwrapOrElseAsync';

/**
 *  Return the result of _transformer_ with using _input_ as an argument for it if _input_ is not `null`.
 *  Otherwise, return the result of _recoverer_.
 *
 *  Basically, this operation is a combination `mapAsync()` and `unwrapOrElseAsync()`.
 *
 *  * `U` must not be `Nullable<*>`.
 *      * If the result of _transformer_ is `null`, this throw an `Error`.
 *      * If the result of _recoverer_ is null`, this throw an `Error`.
 *  * If you'd like to accept `Nullable<*>` as `U`, use a combination `andThenAsync()` and `orElseAsync()`.
 */
export function mapOrElseAsyncForNullable<T, U>(
    input: Nullable<T>,
    recoverer: AsyncRecoveryFn<U>,
    transformer: AsyncTransformFn<T, U>
): Promise<U> {
    const transformed = mapAsyncForNullable(input, transformer);
    const result = transformed.then((transformed) => {
        const result = unwrapOrElseAsyncFromNullable(transformed, recoverer);
        return result;
    });
    return result;
}
