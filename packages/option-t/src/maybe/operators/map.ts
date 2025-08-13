import type { TransformFn } from '../../internal/function.js';
import {
    type Maybe,
    isNullOrUndefined,
    type NotNullOrUndefined,
    expectNotNullOrUndefined,
} from '../core/maybe.js';
import { ERR_MSG_TRANSFORMER_MUST_NOT_RETURN_NO_VAL_FOR_MAYBE } from '../internal/error_message.js';

/**
 *  Return the result of _transformer_ with using _input_ as an argument for it if _input_ is not `null` and `undefined`.
 *  Otherwise, return `null` or `undefined` inputted as _input_.
 *
 *  * `U` must not be `Maybe<*>`.
 *      * If you'd like return `Maybe<*>` as `U`, use `andThen()`.
 *      * If the result of _transformer_ is `null` or `undefined`, this throw an `Error`.
 */
export function mapForMaybe<T, U>(
    input: Maybe<T>,
    transformer: TransformFn<T, NotNullOrUndefined<U>>,
): Maybe<U> {
    if (isNullOrUndefined(input)) {
        return input;
    }

    const result: U = transformer(input);
    // XXX:
    // If `U` is `Maybe<SomeType>`, we think naturally the returned value of this function would be
    // the nested type `Maybe<Maybe<SomeType>>`. But this type means `(SomeType | null | undefined) | null | undefined`.
    // So a type checker would recognize this type as `SomeType | null | undefined`. So it's flattened.
    // Then the user should call `andThen` (_flatmap_) operation instead of this.
    const passed = expectNotNullOrUndefined(
        result,
        ERR_MSG_TRANSFORMER_MUST_NOT_RETURN_NO_VAL_FOR_MAYBE,
    );
    return passed;
}
