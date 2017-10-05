import { Result } from './Result';

export type MapFn<T, U> = (this: void, v: T) => U;
export type FlatmapOkFn<T, U, E> = (this: void, v: T) => Result<U, E>;
export type FlatmapErrFn<T, E, F> = (this: void, e: E) => Result<T, F>;
export type RecoveryFn<E, T> = (this: void, e: E) => T;
export type DoFn<T> = (this: void, v: T) => void;
