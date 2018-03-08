/**
 * MIT License
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

/**
 *  @constructor
 *  @template   T
 *  @param  {boolean}   ok
 *  @param  {T|undefined} val
 *
 *  A base object of `Option<T>`.
 *  This is only used to `option instanceof OptionT`
 *  in an language environment which does not have an interface type system.
 *
 *  The usecase example is a `React.PropTypes.
 */
export function OptionBase(ok, val) {
    /**
     *  @private
     *  @type   {boolean}
     */
    this.ok = ok;

    /**
     *  @private
     *  @type   {T|undefined}
     */
    this.val = val;

    Object.seal(this);
}
OptionBase.prototype = Object.freeze({
    /**
     *  Return whether this is `Some<T>` or not.
     *
     *  @return {boolean}
     */
    get isSome() {
        return this.ok;
    },

    /**
     *  Return whether this is `None` or not.
     *
     *  @return {boolean}
     */
    get isNone() {
        return !this.ok;
    },

    /**
     *  Returns the inner `T` of a `Some<T>`.
     *
     *  @template   T
     *
     *  @return {T}
     *  @throws {TypeError}
     *      Throws if the self value equals `None`.
     */
    unwrap: function OptionTUnwrap() {
        if (!this.ok) {
            throw new TypeError('called `unwrap()` on a `None` value');
        }

        return this.val;
    },

    /**
     *  Returns the contained value or a default value `def`.
     *
     *  @template   T
     *
     *  @param  {T} def
     *  @return {T}
     */
    unwrapOr: function OptionTUnwrapOr(def) {
        return this.ok ? this.val : def;
    },

    /**
     *  Returns the contained value or computes it from a closure `fn`.
     *
     *  @template   T
     *
     *  @param  {function(): T} fn
     *  @return {T}
     */
    unwrapOrElse: function OptionTUnwrapOrElse(fn) {
        return this.ok ? this.val : fn();
    },

    /**
     *  Returns the inner `T` of a `Some<T>`.
     *
     *  @template   T
     *
     *  @param  {string}  msg
     *  @return {T}
     *  @throws {TypeError}
     *      Throws a custom error with provided `msg`
     *      if the self value equals `None`.
     */
    expect: function OptionTExpect(msg) {
        if (!this.ok) {
            throw new TypeError(msg);
        }

        return this.val;
    },

    /**
     *  Maps an `Option<T>` to `Option<U>` by applying a function to a contained value.
     *
     *  @template   T, U
     *
     *  @param  {function(T):U}    fn
     *  @return {!Option<U>}
     */
    map: function OptionTMap(fn) {
        if (!this.ok) {
            // cheat to escape from a needless allocation.
            return this;
        }

        const value = fn(this.val);
        const option = new Some(value);
        return option;
    },

    /**
     *  Returns `None` if the self is `None`,
     *  otherwise calls `fn` with the wrapped value and returns the result.
     *
     *  @template   T, U
     *
     *  @param  {function(T): !Option<U>}    fn
     *  @return {!Option<U>}
     */
    flatMap: function OptionTFlatMap(fn) {
        if (!this.ok) {
            // cheat to escape from a needless allocation.
            return this;
        }

        const mapped = fn(this.val);
        const isOption = (mapped instanceof OptionBase);
        if (!isOption) {
            throw new TypeError('Option<T>.flatMap()\' param `fn` should return `Option<T>`.');
        }

        return mapped;
    },

    /**
     *  Applies a function `fn` to the contained value or returns a default `def`.
     *
     *  @template   T, U
     *
     *  @param  {U} def
     *  @param  {function(T):U} fn
     *  @return {U}
     */
    mapOr: function OptionTMapOr(def, fn) {
        if (this.ok) {
            return fn(this.val);
        }
        else {
            return def;
        }
    },

    /**
     *  Applies a function `fn` to the contained value or computes a default result by `defFn`.
     *
     *  @template   T, U
     *
     *  @param  {function():U}  defFn
     *  @param  {function(T):U} fn
     *  @return {U}
     */
    mapOrElse: function OptionTMapOrElse(defFn, fn) {
        if (this.ok) {
            return fn(this.val);
        }
        else {
            return defFn();
        }
    },

    /**
     *  Returns `None` if the self is `None`, otherwise returns `optb`.
     *
     *  @template   U
     *
     *  @param  {!Option<U>} optb
     *  @return {!Option<U>}
     */
    and: function OptionTAnd(optb) {
        return this.ok ? optb : this;
    },

    /**
     *  The alias of `Option<T>.flatMap()`.
     *
     *  @template   T, U
     *
     *  @param  {function(T): !Option<U>}    fn
     *  @return {!Option<U>}
     */
    andThen: function OptionTAndThen(fn) {
        return this.flatMap(fn);
    },

    /**
     *  Returns the self if it contains a value, otherwise returns `optb`.
     *
     *  @template   T
     *
     *  @param  {!Option<T>} optb
     *  @return {!Option<T>}
     */
    or: function OptionTOr(optb) {
        return this.ok ? this : optb;
    },

    /**
     *  Returns the self if it contains a value,
     *  otherwise calls `fn` and returns the result.
     *
     *  @template   T
     *
     *  @param  {function(): !Option<T>} fn
     *  @return {!Option<T>}
     */
    orElse: function OptionTOr(fn) {
        if (this.ok) {
            return this;
        }
        else {
            const value = fn();
            if (value instanceof OptionBase) {
                return value;
            }

            throw new TypeError('Option<T>.orElse()\' param `fn` should return `Option<T>`.');
        }
    },

    /**
     *  Finalize the self.
     *  After this is called, the object's behavior is not defined.
     *
     *  @param  {function(T)=}  destructor
     *      This would be called with the inner value if self is `Some<T>`.
     *  @return {void}
     */
    drop: function OptionTDrop(destructor) {
        if (this.ok && typeof destructor === 'function') {
            destructor(this.val);
        }

        this.val = null;
        Object.freeze(this);
    },

    /**
     *  @return {*}
     */
    toJSON: function OptionTtoJSON() {
        return {
            is_some: this.ok, // eslint-disable-line camelcase
            value: this.val,
        };
    }
});

/**
 *  We're planning to deprecate this constructor (see https://github.com/karen-irc/option-t/issues/232).
 *  Instead, please use `createSome()`.
 *
 *  @constructor
 *  @template   T
 *  @extends    {OptionBase<T>}
 *
 *  @param  {T}   val
 */
export function Some(val) {
    const o = createSome(val);
    return o;
}

/**
 *  We're planning to deprecate this constructor (see https://github.com/karen-irc/option-t/issues/232).
 *  Instead, please use `createNone()`.
 *
 *  @constructor
 *  @template   T
 *  @extends    {OptionBase<T>}
 */
export function None() {
    const o = createNone();
    return o;
}

/**
 *  @template   T
 *  @param  {T}   val
 *  @return    {OptionT<T>}
 */
export function createSome(val) {
    const o = new OptionBase(true, val);
    return o;
}

/**
 *  @template   T
 *  @return    {OptionT<T>}
 */
export function createNone() {
    const o = new OptionBase(false, undefined);
    return o;
}
