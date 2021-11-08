/**
 *  @deprecated
 *  This module is for backward compatibility.
 */
import type {
    TransformFn as InternalTransformFn,
    RecoveryFn as InternalRecoveryFn,
    RecoveryFromErrorFn as InternalRecoveryFromErrorFn,
    EffectFn as InternalEffectFn,
    FilterFn as InternalFilterFn,
    AsyncTransformFn as InternalAsyncTransformFn,
    AsyncRecoveryFn as InternalAsyncRecoveryFn,
    AsyncRecoveryFromErrorFn as InternalAsyncRecoveryFromErrorFn,
} from '../internal/Function';

/**
 *  @deprecated This type is provided for backward compatibility.
 */
export type TransformFn<T, U> = InternalTransformFn<T, U>;

/**
 *  @deprecated This type is provided for backward compatibility.
 */
export type RecoveryFn<T> = InternalRecoveryFn<T>;

/**
 *  @deprecated This type is provided for backward compatibility.
 */
export type RecoveryFromErrorFn<E, T> = InternalRecoveryFromErrorFn<E, T>;

/**
 *  @deprecated This type is provided for backward compatibility.
 */
export type EffectFn<T> = InternalEffectFn<T>;

/**
 *  @deprecated This type is provided for backward compatibility.
 */
export type FilterFn<T> = InternalFilterFn<T>;

/**
 *  @deprecated This type is provided for backward compatibility.
 */
export type AsyncTransformFn<T, U> = InternalAsyncTransformFn<T, U>;

/**
 *  @deprecated This type is provided for backward compatibility.
 */
export type AsyncRecoveryFn<T> = InternalAsyncRecoveryFn<T>;

/**
 *  @deprecated This type is provided for backward compatibility.
 */
export type AsyncRecoveryFromErrorFn<E, T> = InternalAsyncRecoveryFromErrorFn<E, T>;

/**
 *  @deprecated Use {@link TransformFn} in the same module.
 */
export type MapFn<T, U> = TransformFn<T, U>;

/**
 *  @deprecated Use {@link RecoveryFromErrorFn} in the same module.
 */
export type RecoveryWithErrorFn<E, T> = RecoveryFromErrorFn<E, T>;

/**
 *  @deprecated Use {@link EffectFn} in the same module.
 */
export type TapFn<T> = EffectFn<T>;
