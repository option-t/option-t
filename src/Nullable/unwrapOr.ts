import { Nullable } from './Nullable';

/**
 *  Return _v_ as `T` if the passed _v_ is not `null`.
 *  Otherwise, return _def_.
 *
 *  * _def_ must not be `Nullable<*>`.
 *  * We may introduce an assert to check _def_ is not `Nullable<*>`
 *    as the running time checking for the future.
 *      * See https://github.com/karen-irc/option-t/issues/254.
 */
export function unwrapOrFromNullable<T>(v: Nullable<T>, def: T): T {
    return (v !== null) ? v : def;
}
