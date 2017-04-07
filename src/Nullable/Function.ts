export type MapFn<T, U> = (this: void, v: T) => U;
export type RecoveryFn<T> = (this: void) => T;
export type DoFn<T> = (this: void, v: T) => void;
