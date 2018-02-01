import { Maybe } from './Maybe';

/**
 *  Return _v_ as `T` if the passed _v_ is not `null` and `undefined`.
 *  Otherwise, return _def_.
 *
 *  * _def_ must not be `Maybe<*>`.
 *  * We may introduce an assert to check _def_ is not `Maybe<*>`
 *    as the running time checking for the future.
 *      * See https://github.com/karen-irc/option-t/issues/254.
 */
export function unwrapOrFromMaybe<T>(v: Maybe<T>, def: T): T {
    return (v !== undefined && v !== null) ? v : def;
}
