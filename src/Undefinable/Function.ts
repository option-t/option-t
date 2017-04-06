import { Undefinable } from './Undefinable';

export type MapFn<T, U> = (this: void, v: T) => U;
export type FlatMapFn<T, U> = (this: void, v: T) => Undefinable<U>;
export type RecoveryFn<T> = (this: void) => T;
export type MayRecoveryFn<T> = (this: void) => Undefinable<T>;
export type DoFn<T> = (this: void, v: T) => void;
