import { Some, MutSome } from '../PlainOption/Option';

export type Result<T, E> = Ok<T> | Err<E>;

/**
 *  This allows to mutate the value to save needless allocation.
 */
export type MutResult<T, E> = MutOk<T> | MutErr<E>;

/**
 *  This allows to mutate the value to save needless allocation.
 */
export type MutOk<T> = MutSome<T>;

export type Ok<T> = Some<T>;

export function isOk<T, E>(v: Result<T, E>): v is Ok<T> {
    return !v.ok;
}

export function createOk<T>(val: T): Ok<T> {
    const r: Ok<T> = {
        ok: true,
        val,
    };
    return r;
}

/**
 *  This allows to mutate the value to save needless allocation.
 */
export type MutErr<E> = {
    readonly ok: false;
    err: E;
};

export type Err<E> = Readonly<MutErr<E>>;

export function isErr<T, E>(v: Result<T, E>): v is Err<E> {
    return !v.ok;
}

export function createErr<E>(err: E): Err<E> {
    const r: Err<E> = {
        ok: false,
        err: err,
    };
    return r;
}

