import { EffectFn } from '../internal/Function';
import { Undefinable } from './Undefinable';

/**
 *  * Return _input_ directly.
 *      * This value is passed as the input. But it maybe mutated by calling _effector_.
 *  * Call _effector_ with _input_ if _input_ is not `undefined`.
 *
 *  * This was added to sort with others or future enhancement to accept chaining functions.
 *    We recommend to use simple `if` statement or similar way and they would be more efficient.
 */
export function inspectUndefinable<T>(
    input: Undefinable<T>,
    effector: EffectFn<T>
): Undefinable<T> {
    if (input !== undefined) {
        effector(input);
    }
    return input;
}
