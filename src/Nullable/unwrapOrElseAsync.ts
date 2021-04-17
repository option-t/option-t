import type { RecoveryFn } from '../shared/Function';
import type { Nullable } from './Nullable';
import { expectNotNull } from './expect';
import { ERR_MSG_DEF_MUST_NOT_RETURN_NO_VAL_FOR_NULLABLE } from './ErrorMessage';

/**
 *  Return _v_ as `T` if the passed _v_ is not `null`.
 *  Otherwise, return the result of _def_.
 *
 *  * The result of _def_ must not be `Nullable<*>`.
 *      * If you try to recover the value, use `orElse()`
 *  * If the result of _def_ is `null`, throw `TypeError`.
 */
export function unwrapOrElseAsyncFromNullable<T>(
    v: Nullable<T>,
    def: RecoveryFn<Promise<T>>
): Promise<T> {
    if (v !== null) {
        return Promise.resolve<T>(v);
    }

    const result: Promise<T> = def().then((value: T) => {
        expectNotNull(value, ERR_MSG_DEF_MUST_NOT_RETURN_NO_VAL_FOR_NULLABLE);
        return value;
    });
    return result;
}
