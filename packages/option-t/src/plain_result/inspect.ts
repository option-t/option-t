import type { EffectFn } from '../internal/function.js';
import type { Result } from './result.js';

function noop<T>(_v: T) {}

/**
 *  * Return _input_ directly.
 *      * This value is passed as the input. But it maybe mutated by calling _effector_.
 *  * Call _effector_ with the inner value of _input_ if _input_ is `Ok(T)`.
 *  * This main purpose is to inspect an inner value in a chained function calling.
 *    If you don't have to do it, you should not mutate the inner value.
 *    if-else statement might be sufficient to mutate the inner value instead of calling this function.
 */
export function inspectOkOfResult<T, E>(input: Result<T, E>, effector: EffectFn<T>): Result<T, E> {
    return inspectBothOfResult(input, effector, noop);
}

/**
 *  * Return _input_ directly.
 *      * This value is passed as the input. But it maybe mutated by calling _effector_.
 *  * Call _effector_ with the inner value of _input_ if _input_ is `Err(E)`.
 *  * This main purpose is to inspect an inner value in a chained function calling.
 *    If you don't have to do it, you should not mutate the inner value.
 *    if-else statement might be sufficient to mutate the inner value instead of calling this function.
 */
export function inspectErrOfResult<T, E>(input: Result<T, E>, effector: EffectFn<E>): Result<T, E> {
    return inspectBothOfResult(input, noop, effector);
}

/**
 *  * Return _input_ directly.
 *      * This value is passed as the input. But it maybe mutated by calling _effector_.
 *  * Call _okEffector_ with the inner value of _input_ if _input_ is `Ok(T)`.
 *    Otherwise, call _errEffector_ with the inner value if _input_ is `Err(E)`
 *  * This main purpose is to inspect an inner value in a chained function calling.
 *    If you don't have to do it, you should not mutate the inner value.
 *    if-else statement might be sufficient to mutate the inner value instead of calling this function.
 */
export function inspectBothOfResult<T, E>(
    input: Result<T, E>,
    okEffector: EffectFn<T>,
    errEffector: EffectFn<E>,
): Result<T, E> {
    if (input.ok) {
        okEffector(input.val);
    } else {
        errEffector(input.err);
    }
    return input;
}

/**
 *  @deprecated 32.1.0. Use {@link inspectOkOfResult}
 */
export const inspectOk: typeof inspectOkOfResult = inspectOkOfResult;

/**
 *  @deprecated 32.1.0. Use {@link inspectErrOfResult}
 */
export const inspectErr: typeof inspectErrOfResult = inspectErrOfResult;

/**
 *  @deprecated 32.1.0. Use {@link inspectBothOfResult}
 */
export const inspectBoth: typeof inspectBothOfResult = inspectBothOfResult;
