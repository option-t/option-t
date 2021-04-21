import { expectNotNullAndUndefined } from './expect';
import { ERR_MSG_SELECTOR_MUST_NOT_RETURN_NO_VAL_FOR_MAYBE } from './ErrorMessage';
import { TransformFn } from '../shared/Function';
import { Maybe, isNotNullAndUndefined } from './Maybe';

/**
 *  Return the result of _selector_ with using _src_ as an argument for it if _src_ is not `null` and `undefined`.
 *  Otherwise, return `null` or `undefined` inputted as _src_.
 *
 *  * `U` must not be `Maybe<*>`.
 *      * If you'd like return `Maybe<*>` as `U`, use `andThen()`.
 *      * If the result of _selector_ is `null` or `undefined`, this throw an `Error`.
 */
export function mapForMaybe<T, U>(src: Maybe<T>, selector: TransformFn<T, U>): Maybe<U> {
    if (isNotNullAndUndefined(src)) {
        const r: U = selector(src);
        // XXX:
        // If `U` is `Maybe<SomeType>`, we think naturally the returned value of this function would be
        // the nested type `Maybe<Maybe<SomeType>>`. But this type means `(SomeType | null | undefined) | null | undefined`.
        // So a type checker would recognize this type as `SomeType | null | undefined`. So it's flattened.
        // Then the user should call `andThen` (_flatmap_) operation instead of this.
        return expectNotNullAndUndefined(r, ERR_MSG_SELECTOR_MUST_NOT_RETURN_NO_VAL_FOR_MAYBE);
    } else {
        return src;
    }
}
