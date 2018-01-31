import { Undefinable } from './Undefinable';
import { RecoveryFn } from '../utils/Function';

/**
 *  Return _v_ as `T` if the passed _v_ is not `undefined`.
 *  Otherwise, return the result of _def_.
 *
 *  * The result of _def_ must not be `Undefinable<*>`.
 *      * If you try to recover the value, use `orElse()`
 *  * We may introduce an assert to check it is not `Undefinable<*>`
 *    as the running time checking for the future.
 *      * See https://github.com/karen-irc/option-t/issues/254.
 */
export function unwrapOrElseFromUndefinable<T>(v: Undefinable<T>, def:  RecoveryFn<T>): T {
    return (v !== undefined) ? v : def();
}
