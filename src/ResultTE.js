/**
 * @license MIT License
 *
 * Copyright (c) 2015 Tetsuharu OHZEKI <saneyuki.snyk@gmail.com>
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
'use strict';

var OptionTMod = require('./OptionT');
var Some = OptionTMod.Some;
var None = OptionTMod.None;

/**
 *  @constructor
 *  @template   T, E
 *
 *  A base object of `Result<T, E>`.
 *  This is only used to `option instanceof ResultBase`
 *  in an language environment which does not have an interface type system.
 *
 *  The usecase example is a `React.PropTypes`.
 */
function ResultBase() {}// eslint-disable-line no-empty-function
ResultBase.prototype = Object.freeze({

    /**
     *  Returns true if the result is `Ok`.
     *
     *  @return {boolean}
     */
    isOk: function ResultBaseIsOk() {
        return this._is_ok;
    },

    /**
     *  Returns true if the result is `Err`.
     *
     *  @return {boolean}
     */
    isErr: function ResultBaseIsErr() {
        return !this._is_ok;
    },

    /**
     *  Converts from `Result<T, E>` to `Option<T>`.
     *  If the self is `Ok`, returns `Some<T>`.
     *  Otherwise, returns `None<T>`.
     *
     *  @return {!OptionT<T>}
     */
    ok: function ResultBaseOk() {
        if (this._is_ok) {
            return new Some(this._v);
        }
        else {
            return new None();
        }
    },

    /**
     *  Converts from `Result<T, E>` to `Option<E>`.
     *  If the self is `Err`, returns `Some<E>`.
     *  Otherwise, returns `None<E>`.
     *
     *  @return {!OptionT<E>}
     */
    err: function ResultBaseErr() {
        if (!this._is_ok) {
            return new Some(this._e);
        }
        else {
            return new None();
        }
    },

    /**
     *  Maps a `Result<T, E>` to `Result<U, E>` by applying a function `mapFn<T, U>`
     *  to an contained `Ok` value, leaving an `Err` value untouched.
     *
     *  This function can be used to compose the results of two functions.
     *
     *  @template   U
     *  @param  {!function(T):U}    op
     *  @return {!Result<U, E>}
     */
    map: function ResultBaseMap(op) {
        if (!this._is_ok) {
            // cheat to escape from a needless allocation.
            return this;
        }

        var value = op(this._v);
        var result = new Ok(value);
        return result;
    },

    /**
     *  Maps a `Result<T, E>` to `Result<T, F>` by applying a function `mapFn<E, F>`
     *  to an contained `Err` value, leaving an `Ok` value untouched.
     *
     *  This function can be used to pass through a successful result while handling an error.
     *
     *  @template   U
     *  @param  {!function(E):F}    op
     *  @return {!Result<T, F>}
     */
    mapErr: function ResultBaseMapErr(op) {
        if (this._is_ok) {
            // cheat to escape from a needless allocation.
            return this;
        }

        var value = op(this._e);
        var result = new Err(value);
        return result;
    },

    /**
     *  Returns `res` if the result is `Ok`, otherwise returns the `Err` value of self.
     *
     *  @template   U
     *  @param  {!Result<U, E>} res
     *  @return {!Result<U, E>}
     */
    and: function ResultBaseAnd(res) {
        if (this._is_ok) {
            return res;
        }
        else {
            // cheat to escape from a needless allocation.
            return this;
        }
    },

    /**
     *  Calls `op` if the result is `Ok`, otherwise returns the `Err` value of self.
     *  This function can be used for control flow based on result values.
     *
     *  @template   U
     *  @param  {!function(T):!Result<U, E>} op
     *  @return {!Result<U, E>}
     */
    andThen: function ResultBaseAndThen(op) {
        if (!this._is_ok) {
            // cheat to escape from a needless allocation.
            return this;
        }

        var mapped = op(this._v);
        var isResult = (mapped instanceof ResultBase);
        if (!isResult) {
            throw new TypeError('Result<T, E>.andThen()\' param `op` should return `Result<U, E>`.');
        }

        return mapped;
    },

    /**
     *  Returns `res` if the result is `Err`, otherwise returns the `Ok` value of self.
     *
     *  @template   F
     *  @param  {!Result<T, F>} res
     *  @return {!Result<T, F>}
     */
    or: function ResultBaseOr(res) {
        if (this._is_ok) {
            // cheat to escape from a needless allocation.
            return this;
        }
        else {
            return res;
        }
    },

    /**
     *  Calls `op` if the result is `Err`, otherwise returns the `Ok` value of self.
     *  This function can be used for control flow based on result values.
     *
     *  @template   F
     *  @param  {!function(E):!Result<T, F>} op
     *  @return {!Result<T, F>}
     */
    orElse: function ResultBaseOrElse(op) {
        if (this._is_ok) {
            // cheat to escape from a needless allocation.
            return this;
        }

        var mapped = op(this._e);
        var isResult = (mapped instanceof ResultBase);
        if (!isResult) {
            throw new TypeError('Result<T, E>.orElse()\' param `op` should return `Result<T, F>`.');
        }

        return mapped;
    },

    /**
     *  Return the inner `T` of a `Ok(T)`.
     *
     *  @return {T}
     *
     *  @throws {Error}
     *      Throws if the self is a `Err`.
     */
    unwrap: function ResultBaseUnwrap() {
        return this.expect('called `unwrap()` on a `Err` value');
    },

    /**
     *  Return the inner `E` of a `Err(E)`.
     *
     *  @return {E}
     *
     *  @throws {Error}
     *      Throws if the self is a `Ok`.
     */
    unwrapErr: function ResultBaseUnwrapErr() {
        if (this._is_ok) {
            throw new Error('called `unwrapErr()` on a `Ok` value');
        }
        else {
            return this._e;
        }
    },

    /**
     *  Unwraps a result, return the content of an `Ok`. Else it returns `optb`.
     *
     *  @param  {T} optb
     *  @return {T}
     */
    unwrapOr: function ResultBaseUnwrapOr(optb) {
        if (this._is_ok) {
            return this._v;
        }
        else {
            return optb;
        }
    },

    /**
     *  Unwraps a result, returns the content of an `Ok`.
     *  If the value is an `Err` then it calls `op` with its value.
     *
     *  @param  {!function(E):T}    op
     *  @return {T}
     */
    unwrapOrElse: function ResultBaseUnwrapOrElse(op) {
        if (this._is_ok) {
            return this._v;
        }

        var recovered = op(this._e);
        return recovered;
    },

    /**
     *  Return the inner `T` of a `Ok(T)`.
     *
     *  @param  {string}    message
     *  @return {T}
     *
     *  @throws {Error}
     *      Throws the passed `message` if the self is a `Err`.
     */
    expect: function ResultBaseExpect(message) {
        if (this._is_ok) {
            return this._v;
        }
        else {
            throw new Error(message);
        }
    },

    /**
     *  The destructor method inspired by Rust's `Drop` trait.
     *  We don't define the object's behavior after calling this.
     *
     *  @param  {function(T)=}  destructor
     *      This would be called with the inner value if self is `Ok<T>`.
     *  @param  {function(E)=}  errDestructor
     *      This would be called with the inner value if self is `Err<E>`.
     *  @return {void}
     */
    drop: function ResultBaseDrop(destructor, errDestructor) {
        if (this._is_ok) {
            if (typeof destructor === 'function') {
                destructor(this._v);
            }
            this._v = null;
        }
        else {
            if (typeof errDestructor === 'function') {
                errDestructor(this._e);
            }
            this._e = null;
        }
        Object.freeze(this);
    },
});

/**
 *  @constructor
 *  @template   T, E
 *  @extends    {ResultBase<T, E>}
 *
 *  @param  {T} v
 */
function Ok(v) {
    /* eslint-disable camelcase */
    /**
     *  @private
     *  @type   {boolean}
     */
    this._is_ok = true;
    /* eslint-enable */

    /**
     *  @private
     *  @type   {T}
     */
    this._v = v;

    /**
     *  @private
     *  @type   {E}
     */
    this._e = undefined;

    Object.seal(this);
}
Ok.prototype = new ResultBase();

/**
 *  @constructor
 *  @template   T, E
 *  @extends    {ResultBase<T, E>}
 *
 *  @param  {E} e
 */
function Err(e) {
    /* eslint-disable camelcase */
    /**
     *  @private
     *  @type   {boolean}
     */
    this._is_ok = false;
    /* eslint-enable */

    /**
     *  @private
     *  @type   {T}
     */
    this._v = undefined;

    /**
     *  @private
     *  @type   {E}
     */
    this._e = e;

    Object.seal(this);
}
Err.prototype = new ResultBase();

module.exports = {
    Ok: Ok,
    Err: Err,
    ResultBase: ResultBase,
};
