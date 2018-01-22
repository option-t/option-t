import { MutSome } from '../PlainOption/Option';

export type Result<T, E> = Ok<T> | Err<E>;

/**
 *  This allows to mutate the value to save needless allocation.
 */
export type MutResult<T, E> = MutOk<T> | MutErr<E>;

/**
 *  This allows to mutate the value to save needless allocation.
 */
export type MutOk<T> = MutSome<T> & {
    // To keep the same shape (hidden class or structure) with Err<E>,
    // we should initialize this property.
    // If user use `Object.hasOwnProperty` or `for-in` statement fot this object,
    // this property will be leaked accidentally.
    // However, we don't think it is not comment operation for user
    // Because we provide `is~~()` function
    // and user will not do their operations for a "container" object like this.
    // Even if user will use `const { ok, err }` = Ok;`, then val will be undefined.
    // It's will not be a problem.
    readonly err?: undefined;
};

export type Ok<T> = Readonly<MutOk<T>>;

export function isOk<T, E>(v: Result<T, E>): v is Ok<T> {
    return v.ok;
}

export function createOk<T>(val: T): Ok<T> {
    const r: Ok<T> = {
        ok: true,
        val,
        err: undefined,
    };
    return r;
}

/**
 *  This allows to mutate the value to save needless allocation.
 */
export type MutErr<E> = {
    readonly ok: false;

    // To keep the same shape (hidden class or structure) with Ok<T>,
    // we should initialize this property.
    // If user use `Object.hasOwnProperty` or `for-in` statement fot this object,
    // this property will be leaked accidentally.
    // However, we don't think it is not comment operation for user
    // Because we provide `is~~()` function
    // and user will not do their operations for a "container" object like this.
    // Even if user will use `const { ok, val }` = Err;`, then val will be undefined.
    // It's will not be a problem.
    readonly val?: undefined;

    err: E;
};

export type Err<E> = Readonly<MutErr<E>>;

export function isErr<T, E>(v: Result<T, E>): v is Err<E> {
    return !v.ok;
}

export function createErr<E>(err: E): Err<E> {
    const r: Err<E> = {
        ok: false,
        val: undefined,
        err: err,
    };
    return r;
}

