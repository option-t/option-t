import { RecoveryFn } from '../shared/Function';
import { Maybe } from './Maybe';

/**
 *  Return _v_ as `T` if the passed _v_ is not `null` and `undefined`.
 *  Otherwise, return the result of _def_.
 *
 *  * The result of _def_ must not be `Maybe<*>`.
 *      * If you try to recover the value, use `orElse()`
 *  * We may introduce an assert to check it is not `Maybe<*>`
 *    as the running time checking for the future.
 *      * See https://github.com/karen-irc/option-t/issues/254.
 */
export function unwrapOrElseFromMaybe<T>(v: Maybe<T>, def: RecoveryFn<T>): T {
    return (v !== undefined && v !== null) ? v : def();
}
