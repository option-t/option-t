import type { Mutable } from '../../internal/mutable.js';
import type { Ok, Err } from '../core/result.js';

export type MutOk<out T> = Mutable<Ok<T>>;
export type MutErr<out E> = Mutable<Err<E>>;
export type MutResult<T, E> = MutOk<T> | MutErr<E>;
