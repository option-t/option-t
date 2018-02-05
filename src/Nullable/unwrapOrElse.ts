import { RecoveryFn } from '../shared/Function';
import { Nullable } from './Nullable';

/**
 *  Return _v_ as `T` if the passed _v_ is not `null`.
 *  Otherwise, return the result of _def_.
 *
 *  * The result of _def_ must not be `Nullable<*>`.
 *      * If you try to recover the value, use `orElse()`
 *  * We may introduce an assert to check it is not `Nullable<*>`
 *    as the running time checking for the future.
 *      * See https://github.com/karen-irc/option-t/issues/254.
 */
export function unwrapOrElseFromNullable<T>(v: Nullable<T>, def: RecoveryFn<T>): T {
    return (v !== null) ? v : def();
}
