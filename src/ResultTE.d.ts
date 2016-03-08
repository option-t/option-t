/**
 * MIT License
 *
 * Copyright (c) 2016 Tetsuharu OHZEKI <saneyuki.snyk@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

import {Option, Some, None} from './OptionT';

type mapFn<T, U> = (v: T) => U;
type flatmapOkFn<T, U, E> = (v: T) => Result<U, E>;
type flatmapErrFn<T, E, F> = (e: E) => Result<T, F>;
type recoveryFn<E, T> = (e: E) => T;

/**
 *  The Result/Either type interface whose APIs are inspired
 *  by Rust's `std::result::Result<T, E>`.
 */
export type Result<T, E> = Ok<T, E> | Err<T, E>;

interface ResultMethods<T, E> {
    /**
     *  Returns true if the result is `Ok`.
     */
    isOk(): this is Ok<T, E>;

    /**
     *  Returns true if the result is `Err`.
     */
    isErr(): this is Err<T, E>;

    /**
     *  Converts from `Result<T, E>` to `Option<T>`.
     *  If the self is `Ok`, returns `Some<T>`.
     *  Otherwise, returns `None<T>`.
     */
    ok(): Option<T>;

    /**
     *  Converts from `Result<T, E>` to `Option<E>`.
     *  If the self is `Err`, returns `Some<E>`.
     *  Otherwise, returns `None<E>`.
     */
    err(): Option<E>;

    /**
     *  Maps a `Result<T, E>` to `Result<U, E>` by applying a function `mapFn<T, U>`
     *  to an contained `Ok` value, leaving an `Err` value untouched.
     *
     *  This function can be used to compose the results of two functions.
     */
    map<U>(op: mapFn<T, U>): Result<U, E>;

    /**
     *  Maps a `Result<T, E>` to `Result<T, F>` by applying a function `mapFn<E, F>`
     *  to an contained `Err` value, leaving an `Ok` value untouched.
     *
     *  This function can be used to pass through a successful result while handling an error.
     */
    mapErr<F>(op: mapFn<E, F>): Result<T, F>;

    /**
     *  Returns `res` if the result is `Ok`, otherwise returns the `Err` value of self.
     */
    and<U>(res: Result<U, E>): Result<U, E>;

    /**
     *  Calls `op` if the result is `Ok`, otherwise returns the `Err` value of self.
     *  This function can be used for control flow based on result values.
     */
    andThen<U>(op: flatmapOkFn<T, U, E>): Result<U, E>;

    /**
     *  Returns `res` if the result is `Err`, otherwise returns the `Ok` value of self.
     */
    or<F>(res: Result<T, F>): Result<T, F>;

    /**
     *  Calls `op` if the result is `Err`, otherwise returns the `Ok` value of self.
     *  This function can be used for control flow based on result values.
     */
    orElse<F>(op: flatmapErrFn<T, E, F>): Result<T, F>;

    /**
     *  Return the inner `T` of a `Ok(T)`.
     *
     *  @throws {Error}
     *      Throws if the self is a `Err`.
     */
    unwrap(): T;

    /**
     *  Return the inner `E` of a `Err(E)`.
     *
     *  @throws {Error}
     *      Throws if the self is a `Ok`.
     */
    unwrapErr(): E;

    /**
     *  Unwraps a result, return the content of an `Ok`. Else it returns `optb`.
     */
    unwrapOr(optb: T): T;

    /**
     *  Unwraps a result, returns the content of an `Ok`.
     *  If the value is an `Err` then it calls `op` with its value.
     */
    unwrapOrElse(op: recoveryFn<E, T>): T;

    /**
     *  Return the inner `T` of a `Ok(T)`.
     *
     *  @throws {Error}
     *      Throws the passed `message` if the self is a `Err`.
     */
    expect(message: string): T;

    /**
     *  The destructor method inspired by Rust's `Drop` trait.
     *  We don't define the object's behavior after calling this.
     */
    drop(): void;
}

// XXX:
// This is only used for the instanceof-basis runtime checking. (e.g. `React.PropTypes.instanceOf()`)
// You MUST NOT use for other purpose.
export abstract class ResultBase {}

export class Ok<T, E> extends ResultBase implements ResultMethods<T, E> {

    private _is_ok: boolean;
    private _v: T;
    private _e: E;

    constructor(v: T);

    isOk(): this is Ok<T, E>;
    isErr(): this is Err<T, E>;
    ok(): Option<T>;
    err(): Option<E>;
    map<U>(op: mapFn<T, U>): Result<U, E>;
    mapErr<F>(op: mapFn<E, F>): Result<T, F>;
    and<U>(res: Result<U, E>): Result<U, E>;
    andThen<U>(op: flatmapOkFn<T, U, E>): Result<U, E>;
    or<F>(res: Result<T, F>): Result<T, F>;
    orElse<F>(op: flatmapErrFn<T, E, F>): Result<T, F>;
    unwrap(): T;
    unwrapErr(): E;
    unwrapOr(optb: T): T;
    unwrapOrElse(op: recoveryFn<E, T>): T;
    expect(message: string): T;
    drop(): void;
}

// XXX:
// This class intend to represent the container of some error type `E`.
// So we don't define this as `Error`'s subclass
// or don't restrict type parameter `E`'s upper bound to `Error`.
export class Err<T, E> extends ResultBase implements ResultMethods<T, E> {

    private _is_ok: boolean;
    private _v: T;
    private _e: E;

    constructor(e: E);

    isOk(): this is Ok<T, E>;
    isErr(): this is Err<T, E>;
    ok(): Option<T>;
    err(): Option<E>;
    map<U>(op: mapFn<T, U>): Result<U, E>;
    mapErr<F>(op: mapFn<E, F>): Result<T, F>;
    and<U>(res: Result<U, E>): Result<U, E>;
    andThen<U>(op: flatmapOkFn<T, U, E>): Result<U, E>;
    or<F>(res: Result<T, F>): Result<T, F>;
    orElse<F>(op: flatmapErrFn<T, E, F>): Result<T, F>;
    unwrap(): T;
    unwrapErr(): E;
    unwrapOr(optb: T): T;
    unwrapOrElse(op: recoveryFn<E, T>): T;
    expect(message: string): T;
    drop(): void;
}