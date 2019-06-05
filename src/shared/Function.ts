export type MapFn<T, U> = (v: T) => U;
export type RecoveryFn<T> = () => T;
export type RecoveryWithErrorFn<E, T> = (e: E) => T;
export type TapFn<T> = (v: T) => void;
export type FilterFn<T> = (v: T) => boolean;
