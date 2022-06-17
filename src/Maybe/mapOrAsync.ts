import { assertIsPromise } from '../internal/assert';
import { ERR_MSG_TRANSFORMER_MUST_RETURN_PROMISE } from '../internal/ErrorMessage';
import type { AsyncTransformFn } from '../internal/Function';

import {
    ERR_MSG_TRANSFORMER_MUST_NOT_RETURN_NO_VAL_FOR_MAYBE,
    ERR_MSG_DEFAULT_VALUE_MUST_NOT_BE_NO_VAL_FOR_MAYBE,
} from './ErrorMessage';
import { expectNotNullAndUndefined } from './expect';
import { Maybe, isNullOrUndefined, NotNullAndUndefined } from './Maybe';

function check<T>(value: Maybe<T>): T {
    const passed = expectNotNullAndUndefined(
        value,
        ERR_MSG_TRANSFORMER_MUST_NOT_RETURN_NO_VAL_FOR_MAYBE
    );
    return passed;
}

/**
 *  Return the result of _transformer_ with using _input_ as an argument for it if _input_ is not `null` and `undefined`.
 *  Otherwise, return _defaultValue_.
 *
 *  Basically, this operation is a combination `map()` and `unwrapOr()`.
 *
 *  * `U` must not be `Maybe<*>`.
 *      * If the result of _transformer_ is `null` or `undefined`, this throw an `Error`.
 *      * If the result of _defaultValue_ is `null` or `undefined`, this throw an `Error`.
 *  * If you'd like to accept `Maybe<*>` as `U`, use a combination `andThen()` and `or()`.
 */
export function mapOrAsyncForMaybe<T, U>(
    input: Maybe<T>,
    defaultValue: NotNullAndUndefined<U>,
    transformer: AsyncTransformFn<T, NotNullAndUndefined<U>>
): Promise<NotNullAndUndefined<U>> {
    if (isNullOrUndefined(input)) {
        const nonNullDefault = expectNotNullAndUndefined(
            defaultValue,
            ERR_MSG_DEFAULT_VALUE_MUST_NOT_BE_NO_VAL_FOR_MAYBE
        );
        return Promise.resolve(nonNullDefault);
    }

    const result = transformer(input);
    // If this is async function, this always return Promise, but not.
    // We should check to clarify the error case if user call this function from plain js
    // and they mistake to use this.
    assertIsPromise(result, ERR_MSG_TRANSFORMER_MUST_RETURN_PROMISE);

    const passed = result.then(check);
    return passed;
}
