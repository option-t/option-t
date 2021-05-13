export type TransformFn<T, U> = (input: T) => U;
export type RecoveryFn<T> = () => T;
export type RecoveryFromErrorFn<E, T> = TransformFn<E, T>;
export type EffectFn<T> = (input: T) => void;
export type FilterFn<T> = (input: T) => boolean;

export type AsyncTransformFn<T, U> = TransformFn<T, Promise<U>>;
export type AsyncRecoveryFn<T> = RecoveryFn<Promise<T>>;
export type AsyncRecoveryFromErrorFn<E, T> = AsyncTransformFn<E, T>;

/**
 *  @deprecated Use TransformFn in the same module.
 */
export type MapFn<T, U> = TransformFn<T, U>;

/**
 *  @deprecated Use RecoveryWithErrorFn in the same module.
 */
export type RecoveryWithErrorFn<E, T> = RecoveryFromErrorFn<E, T>;

/**
 *  @deprecated Use EffectFn in the same module.
 */
export type TapFn<T> = EffectFn<T>;
