import { Result } from './Result';

export type FlatmapOkFn<T, U, E> = (this: void, v: T) => Result<U, E>;
export type FlatmapErrFn<T, E, F> = (this: void, e: E) => Result<T, F>;
