import type { TransformFn } from '../../internal/function.js';
import {
    type Undefinable,
    isUndefined,
    type NotUndefined,
    expectNotUndefined,
} from '../core/undefinable.js';
import { ERR_MSG_TRANSFORMER_MUST_NOT_RETURN_NO_VAL_FOR_UNDEFINABLE } from '../internal/error_message.js';

/**
 *  Return the result of _transformer_ with using _input_ as an argument for it if _input_ is not `undefined`,
 *  Otherwise, return `undefined`.
 *
 *  * `U` must not be `Undefinable<*>`.
 *      * If you'd like return `Undefinable<*>` as `U`, use `andThen()`.
 *      * If the result of _transformer_ is `undefined`, this throw an `Error`.
 */
export function mapForUndefinable<T, U>(
    input: Undefinable<T>,
    transformer: TransformFn<T, NotUndefined<U>>,
): Undefinable<U> {
    if (isUndefined(input)) {
        return input;
    }

    const result = transformer(input);
    // XXX:
    // If `U` is `Undefinable<SomeType>`, we think naturally the returned value of this function would be
    // the nested type `Undefinable<Undefinable<SomeType>>`. But this type means `(SomeType | undefined) | undefined`.
    // So a type checker would recognize this type as `SomeType | undefined`. So it's flattened.
    // Then the user should call `andThen` (_flatmap_) operation instead of this.
    const passed = expectNotUndefined(
        result,
        ERR_MSG_TRANSFORMER_MUST_NOT_RETURN_NO_VAL_FOR_UNDEFINABLE,
    );
    return passed;
}
