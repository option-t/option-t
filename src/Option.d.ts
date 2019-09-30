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

import {
    MapFn,
    RecoveryFn,
    TapFn,
} from './shared/Function';

export type FlatmapFn<T, U> = MapFn<T, Option<U>>;
export type MayRecoveryFn<T> = RecoveryFn<Option<T>>;

interface Optionable<T> {
    /**
     *  Return whether the self is `Some<T>` or not.
     */
    readonly isSome: boolean;

    /**
     *  Return whether the self is `None` or not.
     */
    readonly isNone: boolean;

    /**
     *  Return the inner `T` of a `Some<T>`.
     *
     *  @throws {Error}
     *      Throws if the self is a `None`.
     */
    unwrap(): T | never;

    /**
     *  Return the contained value or a default value `def`.
     *
     *  @param  def
     *      The default value which is used if the self is a `None`.
     */
    unwrapOr(def: T): T;

    /**
     *  Return the contained value or compute it from a closure `fn`.
     *
     *  @param fn
     *      The function which produces a default value which is used if the self is a `None`.
     */
    unwrapOrElse(fn: RecoveryFn<T>): T;

    /**
     *  Return the inner `T` of a `Some<T>`.
     *
     *  @param  msg
     *      The error message which is used if the self is a `None`.
     *  @throws {Error}
     *      Throws a custom error with provided `msg`
     *      if the self value equals `None`.
     */
    expect(msg: string): T | never;

    /**
     *  Map an `Option<T>` to `Option<U>` by applying a function to the contained value.
     *
     *  @param  fn
     *      The function which is applied to the contained value and return the result
     *      if the self is a `Some<T>`.
     */
    map<U>(fn: MapFn<T, U>): Option<U>;

    /**
     *  Return `None` if the self is `None`,
     *  otherwise call `fn` with the wrapped value and return the result.
     *
     *  @param  fn
     *      The function which is applied to the contained value and return the result
     *      if the self is a `Some<T>`. This result will be flattened once.
     */
    flatMap<U>(fn: FlatmapFn<T, U>): Option<U>;

    /**
     *  Apply a function `fn` to the contained value or return a default `def`.
     *
     *  @param  def
     *      The default value which is used if the self is a `None`.
     *  @param  fn
     *      The function which is applied to the contained value and return the result
     *      if the self is a `Some<T>`.
     */
    mapOr<U>(def: U, fn: MapFn<T, U>): U;

    /**
     *  Apply a function `fn` to the contained value or produce a default result by `defFn`.
     *
     *  @param  defFn
     *      The function which produces a default value which is used if the self is a `None`.
     *  @param  fn
     *      The function which is applied to the contained value and return the result
     *      if the self is a `Some<T>`.
     */
    mapOrElse<U>(def: RecoveryFn<U>, fn: MapFn<T, U>): U;

    /**
     *  Return the passed value if the self is `Some<T>`,
     *  otherwise return `None`.
     *
     *  @param  optb
     *      The value which is returned if the self is a `Some<T>`.
     */
    and<U>(optb: Option<U>): Option<U>;

    /**
     *  The alias of `Option<T>.flatMap()`.
     *
     *  @param  fn
     */
    andThen<U>(fn: FlatmapFn<T, U>): Option<U>;

    /**
     *  Return the self if it contains a value, otherwise return `optb`.
     *
     *  @param  optb
     *      The default value which is used if the self is a `None`.
     */
    or(optb: Option<T>): Option<T>;

    /**
     *  Return the self if it contains a value,
     *  otherwise call `fn` and returns the result.
     *
     *  @param  fn
     *      The function which produces a default value which is used if the self is a `None`.
     */
    orElse(fn: MayRecoveryFn<T>): Option<T>;

    /**
     *  Finalize the self.
     *  After this is called, the object's behavior is not defined.
     *
     *  This method is inspired by Rust's `Drop` trait.
     *
     *  @param  destructor
     *      This would be called with the inner value if self is `Some<T>`.
     */
    drop(destructor?: TapFn<T>): void;
}

/**
 *  @deprecated
 *      See https://github.com/karen-irc/option-t/issues/459
 *
 *  The base object of `Some<T>` and `None<T>`.
 *
 *  XXX:
 *  In general case, __we must not use this base object__.
 *  __Use `Option<T>` interface strongly__.
 *
 *  You can only this object if you need to cooperate with some libralies
 *  like `React.PropTypes` which are use `instanceof` checking to work together with
 *  others in the pure JavaScript world.
 *
 *  The typical case is TSX (TypeScript JSX) syntax.
 *  https://github.com/Microsoft/TypeScript/wiki/JSX
 *
 *  Our basic stance is that _you don't use this and need not it in almost case_.
 *
 *  See also:
 *  https://github.com/karen-irc/option-t/pull/77
 */
export abstract class OptionBase<T> implements Optionable<T> {
    // eslint-disable-next-line @typescript-eslint/member-naming
    private readonly ok: boolean;
    // eslint-disable-next-line @typescript-eslint/member-naming
    private readonly val: T | undefined;

    readonly isSome: boolean;
    readonly isNone: boolean;

    protected constructor(ok: boolean, val: T | undefined);

    unwrap(): T | never;
    unwrapOr(def: T): T;
    unwrapOrElse(fn: RecoveryFn<T>): T;
    expect(msg: string): T | never;
    map<U>(fn: MapFn<T, U>): Option<U>;
    flatMap<U>(fn: FlatmapFn<T, U>): Option<U>;
    mapOr<U>(def: U, fn: MapFn<T, U>): U;
    mapOrElse<U>(def: RecoveryFn<U>, fn: MapFn<T, U>): U;
    and<U>(optb: Option<U>): Option<U>;
    andThen<U>(fn: FlatmapFn<T, U>): Option<U>;
    or(optb: Option<T>): Option<T>;
    orElse(fn: MayRecoveryFn<T>): Option<T>;
    drop(destructor?: TapFn<T>): void;
    // FYI: this is json representation.
    // eslint-disable-next-line @typescript-eslint/camelcase
    toJSON(): { is_some: boolean; value: T | undefined; };
}

interface Some<T> extends Optionable<T> {
    readonly isSome: true;
    readonly isNone: false;
    unwrap(): T;
    expect(msg: string): T;
}

interface None<T> extends Optionable<T> {
    readonly isSome: false;
    readonly isNone: true;
    unwrap(): never;
    expect(msg: string): never;
}

/**
 *  @deprecated
 *      See https://github.com/karen-irc/option-t/issues/459
 *
 *  The Option/Maybe type interface whose APIs are inspired
 *  by Rust's `std::option::Option<T>`.
 *
 *  _We recommend to use utility types & functions (`PlainOption/Option<T>`)
 *  if you don't have to use `instanceof` check and
 *  you should avoid to expose this object as a public API of your package_
 *  because `instanceof` checking might not work correctly if a user project has
 *  multiple version of this package in their dependencies.
 *  See ([#337](https://github.com/karen-irc/option-t/pull/337)).
 *
 *  Furthermore, we don't have a plan to implements a new API aggressively for this object
 *  because we need to implement it on `.prototype`
 *  and it might be hard to remove unused methods from `.prototype` on minifying.
 *  We could resolve this problem for the future release but today is not so.
 *
 *  See [#378](https://github.com/karen-irc/option-t/issues/378)
 *
 *  And some operators might not return a new object and reuse the input
 *  to reduce an object allocation. Thus comparing _this `Option<T>`` is meaningles.
 *  This is by design because we think this pattern is meaningless.
 */
export type Option<T> = Some<T> | None<T>;

export declare function createSome<T>(val: T): Some<T>;
export declare function createNone<T>(): None<T>;
