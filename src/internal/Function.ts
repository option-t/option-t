export type TransformFn<T, U> = (input: T) => U;
export type RecoveryFn<T> = () => T;
export type RecoveryFromErrorFn<E, T> = TransformFn<E, T>;
export type EffectFn<T> = (input: T) => void;
export type FilterFn<T> = (input: T) => boolean;

export type AsyncTransformFn<T, U> = TransformFn<T, Promise<U>>;
export type AsyncRecoveryFn<T> = RecoveryFn<Promise<T>>;
export type AsyncRecoveryFromErrorFn<E, T> = AsyncTransformFn<E, T>;
