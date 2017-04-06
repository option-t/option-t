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

import {Option, Some, None} from './Option';

type MapFn<T, U> = (this: void, v: T) => U;
type FlatmapOkFn<T, U, E> = (this: void, v: T) => Result<U, E>;
type FlatmapErrFn<T, E, F> = (this: void, e: E) => Result<T, F>;
type RecoveryFn<E, T> = (this: void, e: E) => T;
type DestructorFn<T> = (this: void, v: T) => void;

// XXX:
// This is only used for the instanceof-basis runtime checking. (e.g. `React.PropTypes.instanceOf()`)
// You MUST NOT use for other purpose.
export abstract class ResultBase<T, E> {
    private readonly _is_ok: boolean;
    private readonly _v: T | undefined;
    private readonly _e: E | undefined;

    /**
     *  Returns true if the result is `Ok`.
     */
    abstract readonly isOk: boolean;

    /**
     *  Returns true if the result is `Err`.
     */
    abstract readonly isErr: boolean;

    /**
     *  Converts from `Result<T, E>` to `Option<T>`.
     *  If the self is `Ok`, returns `Some<T>`.
     *  Otherwise, returns `None<T>`.
     */
    abstract ok(): Option<T>;

    /**
     *  Converts from `Result<T, E>` to `Option<E>`.
     *  If the self is `Err`, returns `Some<E>`.
     *  Otherwise, returns `None<E>`.
     */
    abstract err(): Option<E>;

    /**
     *  Maps a `Result<T, E>` to `Result<U, E>` by applying a function `mapFn<T, U>`
     *  to an contained `Ok` value, leaving an `Err` value untouched.
     *
     *  This function can be used to compose the results of two functions.
     */
    abstract map<U>(op: MapFn<T, U>): Result<U, E>;

    /**
     *  Maps a `Result<T, E>` to `Result<T, F>` by applying a function `mapFn<E, F>`
     *  to an contained `Err` value, leaving an `Ok` value untouched.
     *
     *  This function can be used to pass through a successful result while handling an error.
     */
    abstract mapErr<F>(op: MapFn<E, F>): Result<T, F>;

    /**
     *  Returns `res` if the result is `Ok`, otherwise returns the `Err` value of self.
     */
    abstract and<U>(res: Result<U, E>): Result<U, E>;

    /**
     *  Calls `op` if the result is `Ok`, otherwise returns the `Err` value of self.
     *  This function can be used for control flow based on result values.
     */
    abstract andThen<U>(op: FlatmapOkFn<T, U, E>): Result<U, E>;

    /**
     *  Returns `res` if the result is `Err`, otherwise returns the `Ok` value of self.
     */
    abstract or<F>(res: Result<T, F>): Result<T, F>;

    /**
     *  Calls `op` if the result is `Err`, otherwise returns the `Ok` value of self.
     *  This function can be used for control flow based on result values.
     */
    abstract orElse<F>(op: FlatmapErrFn<T, E, F>): Result<T, F>;

    /**
     *  Return the inner `T` of a `Ok(T)`.
     *
     *  @throws {Error}
     *      Throws if the self is a `Err`.
     */
    abstract unwrap(): T | never;

    /**
     *  Return the inner `E` of a `Err(E)`.
     *
     *  @throws {Error}
     *      Throws if the self is a `Ok`.
     */
    abstract unwrapErr(): E | never;

    /**
     *  Unwraps a result, return the content of an `Ok`. Else it returns `optb`.
     */
    abstract unwrapOr(optb: T): T;

    /**
     *  Unwraps a result, returns the content of an `Ok`.
     *  If the value is an `Err` then it calls `op` with its value.
     */
    abstract unwrapOrElse(op: RecoveryFn<E, T>): T;

    /**
     *  Return the inner `T` of a `Ok(T)`.
     *
     *  @throws {Error}
     *      Throws the passed `message` if the self is a `Err`.
     */
    abstract expect(message: string): T | never;

    /**
     *  The destructor method inspired by Rust's `Drop` trait.
     *  We don't define the object's behavior after calling this.
     *
     *  @param  destructor
     *      This would be called with the inner value if self is `Ok<T>`.
     *  @param  errDestructor
     *      This would be called with the inner value if self is `Err<E>`.
     */
    abstract drop(destructor?: DestructorFn<T>, errDestructor?: DestructorFn<E>): void;
}

interface Ok<T, E> extends ResultBase<T, E> {
    readonly isOk: true;
    readonly isErr: false;
    ok(): Option<T>;
    err(): Option<E>;
    map<U>(op: MapFn<T, U>): Result<U, E>;
    mapErr<F>(op: MapFn<E, F>): Result<T, F>;
    and<U>(res: Result<U, E>): Result<U, E>;
    andThen<U>(op: FlatmapOkFn<T, U, E>): Result<U, E>;
    or<F>(res: Result<T, F>): Result<T, F>;
    orElse<F>(op: FlatmapErrFn<T, E, F>): Result<T, F>;
    unwrap(): T;
    unwrapErr(): never;
    unwrapOr(optb: T): T;
    unwrapOrElse(op: RecoveryFn<E, T>): T;
    expect(message: string): T;
    drop(destructor?: DestructorFn<T>, errDestructor?: DestructorFn<E>): void;
}

interface OkConstructor {
    new<T, E>(v: T): Result<T, E>;
    readonly prototype: Ok<any, any>;
}

// XXX:
// This class intend to represent the container of some error type `E`.
// So we don't define this as `Error`'s subclass
// or don't restrict type parameter `E`'s upper bound to `Error`.
interface Err<T, E> extends ResultBase<T, E> {
    readonly isOk: false;
    readonly isErr: true;
    ok(): Option<T>;
    err(): Option<E>;
    map<U>(op: MapFn<T, U>): Result<U, E>;
    mapErr<F>(op: MapFn<E, F>): Result<T, F>;
    and<U>(res: Result<U, E>): Result<U, E>;
    andThen<U>(op: FlatmapOkFn<T, U, E>): Result<U, E>;
    or<F>(res: Result<T, F>): Result<T, F>;
    orElse<F>(op: FlatmapErrFn<T, E, F>): Result<T, F>;
    unwrap(): never;
    unwrapErr(): E;
    unwrapOr(optb: T): T;
    unwrapOrElse(op: RecoveryFn<E, T>): T;
    expect(message: string): never;
    drop(destructor?: DestructorFn<T>, errDestructor?: DestructorFn<E>): void;
}

interface ErrConstructor {
    new<T, E>(e: E): Result<T, E>;
    readonly prototype: Err<any, any>;
}

/**
 *  The Result/Either type interface whose APIs are inspired
 *  by Rust's `std::result::Result<T, E>`.
 */
export type Result<T, E> = Ok<T, E> | Err<T, E>;

export declare const Ok: OkConstructor;
export declare const Err: ErrConstructor;
