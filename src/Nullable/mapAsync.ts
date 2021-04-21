import type { MapFn } from '../shared/Function';
import { Nullable, isNull } from './Nullable';
import { ERR_MSG_SELECTOR_MUST_NOT_RETURN_NO_VAL_FOR_NULLABLE } from './ErrorMessage';
import { expectNotNull } from './expect';
import { assertIsPromise } from '../shared/assert';
import { ERR_MSG_TRANSFORMER_MUST_RETURN_PROMISE } from '../shared/ErrorMessage';

function check<T>(value: Nullable<T>): T {
    const result = expectNotNull(value, ERR_MSG_SELECTOR_MUST_NOT_RETURN_NO_VAL_FOR_NULLABLE);
    return result;
}

/**
 *  Return the result of _transformer_ with using _src_ as an argument for it if _src_ is not `null`,
 *  Otherwise, return `null`.
 *
 *  * `U` must not be `Nullable<*>`.
 *      * If you'd like return `Nullable<*>` as `U`, use `andThen()`.
 *      * If the result of _transformer_ is `null`, this throw an `Error`.
 */
export function mapAsyncForNullable<T, U>(
    src: Nullable<T>,
    transformer: MapFn<T, Promise<U>>
): Promise<Nullable<U>> {
    if (isNull(src)) {
        return Promise.resolve(src);
    }

    const transformed = transformer(src);
    // If this is async function, this always return Promise, but not.
    // We should check to clarify the error case if user call this function from plain js
    // and they mistake to use this.
    assertIsPromise(transformed, ERR_MSG_TRANSFORMER_MUST_RETURN_PROMISE);

    // XXX:
    // If `U` is `Nullable<SomeType>`, we think naturally the returned value of this function would be
    // the nested type `Nullable<Nullable<SomeType>>`. But this type means `(SomeType | null) | null`.
    // So a type checker would recognize this type as `SomeType | null`. So it's flattened.
    // Then the user should call `andThen` (_flatmap_) operation instead of this.
    const result = transformed.then(check);

    return result;
}
