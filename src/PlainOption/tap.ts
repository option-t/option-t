import { EffectFn } from '../shared/Function';
import { Option } from './Option';

/**
 *  * Return _v_ directly.
 *      * This value is passed as the input. But it maybe mutated by calling _fn_.
 *  * Call _fn_ with the inner value of _v_ if _v_ is `Some(T)`.
 *  * This main purpose is to inspect an inner value in a chained function calling.
 *    If you don't have to do it, you should not mutate the inner value.
 *    if-else statement might be sufficient to mutate the inner value instead of calling this function.
 */
export function tapOption<T>(v: Option<T>, fn: EffectFn<T>): Option<T> {
    if (v.ok) {
        fn(v.val);
    }
    return v;
}
