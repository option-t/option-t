import type { EffectFn } from '../../internal/function.js';
import type { Option } from './option.js';

/**
 *  * Return _input_ directly.
 *      * This value is passed as the input. But it maybe mutated by calling _effector_.
 *  * Call _effector_ with the inner value of _input_ if _input_ is `Some(T)`.
 *  * This main purpose is to inspect an inner value in a chained function calling.
 *    If you don't have to do it, you should not mutate the inner value.
 *    if-else statement might be sufficient to mutate the inner value instead of calling this function.
 */
export function inspectOption<T>(input: Option<T>, effector: EffectFn<T>): Option<T> {
    if (input.ok) {
        effector(input.val);
    }
    return input;
}
