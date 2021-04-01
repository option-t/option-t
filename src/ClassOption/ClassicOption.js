/* eslint-enable valid-jsdoc */

/**
 *  @deprecated
 *      See https://github.com/karen-irc/option-t/issues/459
 *
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
export class ClassicOptionBase {
    constructor(ok, val) {
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
}
ClassicOptionBase.prototype = Object.freeze({
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
    unwrap() {
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
    unwrapOr(def) {
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
    unwrapOrElse(fn) {
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
    expect(msg) {
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
    map(fn) {
        if (!this.ok) {
            // cheat to escape from a needless allocation.
            return this;
        }

        const value = fn(this.val);
        const option = createClassicSome(value);
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
    flatMap(fn) {
        if (!this.ok) {
            // cheat to escape from a needless allocation.
            return this;
        }

        const mapped = fn(this.val);
        const isOption = mapped instanceof ClassicOptionBase;
        if (!isOption) {
            throw new TypeError("Option<T>.flatMap()' param `fn` should return `Option<T>`.");
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
    mapOr(def, fn) {
        if (this.ok) {
            return fn(this.val);
        } else {
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
    mapOrElse(defFn, fn) {
        if (this.ok) {
            return fn(this.val);
        } else {
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
    and(optb) {
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
    andThen(fn) {
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
    or(optb) {
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
    orElse(fn) {
        if (this.ok) {
            return this;
        } else {
            const value = fn();
            if (value instanceof ClassicOptionBase) {
                return value;
            }

            throw new TypeError("Option<T>.orElse()' param `fn` should return `Option<T>`.");
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
    drop(destructor) {
        if (this.ok && typeof destructor === 'function') {
            destructor(this.val);
        }

        this.val = null;
        Object.freeze(this);
    },

    /**
     *  @return {*}
     */
    toJSON() {
        return {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            is_some: this.ok,
            value: this.val,
        };
    },
});

/**
 *  @deprecated
 *      See https://github.com/karen-irc/option-t/issues/459
 *
 *  @template   T
 *  @param  {T}   val
 *  @return    {OptionT<T>}
 */
export function createClassicSome(val) {
    const o = new ClassicOptionBase(true, val);
    return o;
}

/**
 *  @deprecated
 *      See https://github.com/karen-irc/option-t/issues/459
 *
 *  @template   T
 *  @return    {OptionT<T>}
 */
export function createClassicNone() {
    const o = new ClassicOptionBase(false, undefined);
    return o;
}
