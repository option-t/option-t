/*
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

/**
 *  @constructor
 *  @template   T
 *
 *  @param  {T=}   val (optional)
 *      * if `value` is `T` (not `undefined`), this should be `Some<T>`.
 *      * if `value` is `undefined` or not passed, this should be `None`.
 */
var OptionType = function OptionType(val) {
    /* eslint-disable camelcase */
    /** @type   {boolean}   */
    this.is_some = (val !== undefined);
    /* eslint-enable */

    /** @type   {T}   */
    this.value = val;

    Object.seal(this);
};
OptionType.prototype = Object.seal({

    /**
     *  Return whether this is `Some<T>` or not.
     *
     *  @template   T
     *  @return {boolean}
     */
    get isSome() {
        return this.is_some;
    },

    /**
     *  Returns the inner `T` of a `Some<T>`.
     *
     *  @template   T
     *
     *  @return {T}
     *  @throws {Error}
     *      Throws if the self value equals `None`.
     */
    unwrap: function OptionTypeUnwrap() {
        if (!this.is_some) {
            throw new Error('called `unwrap()` on a `None` value');
        }

        return this.value;
    },

    /**
     *  Maps an `OptionType<T>` to `OptionType<U>` by applying a function to a contained value.
     *
     *  @template   T, U
     *
     *  @param  {function(T):U}    fn
     *      XXX: If `U` is `undefined`, this method will return `None<U>` in such case.
     *           Because this library treats `undefined` as `None`.
     *  @return {OptionType<U>}
     */
    map: function OptionTypeMap(fn) {
        if (!this.is_some) {
            // cheat to escape from a needless allocation.
            return this;
        }

        var value = fn(this.value);
        var option = new OptionType(value);
        return option;
    },

    /**
     *  Finalize the self.
     *  After this is called, the object's behavior is not defined.
     *
     *  @return {void}
     */
    drop: function () {
        /* eslint-disable camelcase */
        this.is_some = false;
        /* eslint-enable */

        this.value = null;
        Object.freeze(this);
    },

});

module.exports = {
    OptionType: OptionType,
};
