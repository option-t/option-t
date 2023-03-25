import { assertIsArray } from '../internal/assert.js';
import { ERR_MSG_INPUT_MUST_BE_TUPLE_ARRAY } from '../internal/error_message.js';
import { isNull, type Nullable } from './nullable.js';

/**
 *  Unzips an option containing a tuple of two options.
 *  If _self_ is not `null` this method returns `[T, U]`. Otherwise, `[null, null]` is returned.
 */
export function unzipForNullable<T, U>(
    input: Nullable<[NonNullable<T>, NonNullable<U>]>
): [Nullable<T>, Nullable<U>] {
    if (isNull(input)) {
        return [null, null];
    }

    assertIsArray(input, ERR_MSG_INPUT_MUST_BE_TUPLE_ARRAY);

    const result: [Nullable<T>, Nullable<U>] = input;
    return result;
}
