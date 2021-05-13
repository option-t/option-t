import { expectNotNull } from './expect';
import { ERR_MSG_TRANSFORMER_MUST_NOT_RETURN_NO_VAL_FOR_NULLABLE } from './ErrorMessage';
import { TransformFn } from '../internal/Function';
import { Nullable, isNotNull } from './Nullable';

/**
 *  Return the result of _transformer_ with using _input_ as an argument for it if _input_ is not `null`,
 *  Otherwise, return `null`.
 *
 *  * `U` must not be `Nullable<*>`.
 *      * If you'd like return `Nullable<*>` as `U`, use `andThen()`.
 *      * If the result of _transformer_ is `null`, this throw an `Error`.
 */
export function mapForNullable<T, U>(
    input: Nullable<T>,
    transformer: TransformFn<T, U>
): Nullable<U> {
    if (isNotNull(input)) {
        const r = transformer(input);
        // XXX:
        // If `U` is `Nullable<SomeType>`, we think naturally the returned value of this function would be
        // the nested type `Nullable<Nullable<SomeType>>`. But this type means `(SomeType | null) | null`.
        // So a type checker would recognize this type as `SomeType | null`. So it's flattened.
        // Then the user should call `andThen` (_flatmap_) operation instead of this.
        return expectNotNull(r, ERR_MSG_TRANSFORMER_MUST_NOT_RETURN_NO_VAL_FOR_NULLABLE);
    } else {
        return input;
    }
}
