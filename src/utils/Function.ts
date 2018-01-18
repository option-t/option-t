export type MapFn<T, U> = (this: void, v: T) => U;
export type RecoveryFn<T> = (this: void) => T;
export type RecoveryWithErrorFn<E, T> = (this: void, e: E) => T;
export type TapFn<T> = (this: void, v: T) => void;

// This type has been deprecated. This will be removed by https://github.com/karen-irc/option-t/issues/228
export type DoFn<T> = (this: void, v: T) => void;
