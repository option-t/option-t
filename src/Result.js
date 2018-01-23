import { Some, None } from './Option';

/**
 *  @constructor
 *  @template   T, E
 *  @param  {boolean}   ok
 *  @param  {T|undefined}   val
 *  @param  {E|undefined}   err
 *
 *  A base object of `Result<T, E>`.
 *  This is only used to `option instanceof ResultBase`
 *  in an language environment which does not have an interface type system.
 *
 *  The usecase example is a `React.PropTypes`.
 */
export function ResultBase(ok, val, err) {
    /* eslint-disable camelcase */
    /**
     *  @private
     *  @type   {boolean}
     */
    this._is_ok = ok;
    /* eslint-enable */

    /**
     *  @private
     *  @type   {T}
     */
    this._v = val;

    /**
     *  @private
     *  @type   {E}
     */
    this._e = err;
}
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

        const value = op(this._v);
        const result = new Ok(value);
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

        const value = op(this._e);
        const result = new Err(value);
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

        const mapped = op(this._v);
        const isResult = (mapped instanceof ResultBase);
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

        const mapped = op(this._e);
        const isResult = (mapped instanceof ResultBase);
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
     *  @throws {TypeError}
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
     *  @throws {TypeError}
     *      Throws if the self is a `Ok`.
     */
    unwrapErr: function ResultBaseUnwrapErr() {
        if (this._is_ok) {
            throw new TypeError('called `unwrapErr()` on a `Ok` value');
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

        const recovered = op(this._e);
        return recovered;
    },

    /**
     *  Return the inner `T` of a `Ok(T)`.
     *
     *  @param  {string}    message
     *  @return {T}
     *
     *  @throws {TypeError}
     *      Throws the passed `message` if the self is a `Err`.
     */
    expect: function ResultBaseExpect(message) {
        if (this._is_ok) {
            return this._v;
        }
        else {
            throw new TypeError(message);
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
 *  We're planning to deprecate this constructor (see https://github.com/karen-irc/option-t/issues/232).
 *  Instead, please use `createOk()`.
 *
 *  @constructor
 *  @template   T, E
 *  @extends    {ResultBase<T, E>}
 *
 *  @param  {T} v
 */
export function Ok(v) {
    const r = new ResultBase(true, v, undefined);
    Object.seal(r);
    return r;
}

/**
 *  We're planning to deprecate this constructor (see https://github.com/karen-irc/option-t/issues/232).
 *  Instead, please use `createErr()`.
 *
 *  @constructor
 *  @template   T, E
 *  @extends    {ResultBase<T, E>}
 *
 *  @param  {E} e
 */
export function Err(e) {
    const r = new ResultBase(false, undefined, e);
    Object.seal(r);
    return r;
}

/**
 *  @template   T, E
 *  @param  {!T} v
 *  @return    {Result<T, E>}
 */
export function createOk(v) {
    const o = new Ok(v);
    return o;
}

/**
 *  @template   T, E
 *  @param  {!E} e
 *  @return    {Result<T, E>}
 */
export function createErr(e) {
    const o = new Err(e);
    return o;
}
