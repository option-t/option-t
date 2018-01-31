import { Undefinable } from './Undefinable';

/**
 *  Return _v_ as `T` if the passed _v_ is not `undefined`.
 *  Otherwise, return _def_.
 *
 *  * _def_ must not be `Undefinable<*>`.
 *  * We may introduce an assert to check _def_ is not `Undefinable<*>`
 *    as the running time checking for the future.
 *      * See https://github.com/karen-irc/option-t/issues/254.
 */
export function unwrapOrFromUndefinable<T>(v: Undefinable<T>, def: T): T {
    return (v !== undefined) ? v : def;
}
