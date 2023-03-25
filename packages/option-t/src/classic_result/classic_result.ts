import {
    type ClassicOption,
    type ClassicSome as Some,
    type ClassicNone as None,
    createClassicSome,
    createClassicNone,
} from '../classic_option/classic_option.js';
import type { TransformFn, RecoveryFromErrorFn, EffectFn } from '../internal/function.js';

/**
 *  @deprecated
 *      See https://github.com/option-t/option-t/issues/459
 */
export type ClassicTryTransformFn<T, U, E> = TransformFn<T, ClassicResult<U, E>>;

/**
 *  @deprecated
 *      See https://github.com/option-t/option-t/issues/459
 */
export type ClassicTryRecoverFromErrorFn<T, E, F> = RecoveryFromErrorFn<E, ClassicResult<T, F>>;

/**
 *  @deprecated
 *      We keep this only for backward compatibility.
 *      See https://github.com/option-t/option-t/issues/459
 */
interface ClassicResultable<T, E> {
    /**
     *  Returns true if the result is `Ok`.
     */
    isOk(): this is ClassicOk<T, E>;

    /**
     *  Returns true if the result is `Err`.
     */
    isErr(): this is ClassicErr<T, E>;

    /**
     *  Converts from `Result<T, E>` to `Option<T>`.
     *  If the self is `Ok`, returns `Some<T>`.
     *  Otherwise, returns `None<T>`.
     */
    ok(): ClassicOption<T>;

    /**
     *  Converts from `Result<T, E>` to `Option<E>`.
     *  If the self is `Err`, returns `Some<E>`.
     *  Otherwise, returns `None<E>`.
     */
    err(): ClassicOption<E>;

    /**
     *  Maps a `Result<T, E>` to `Result<U, E>` by applying a function `mapFn<T, U>`
     *  to an contained `Ok` value, leaving an `Err` value untouched.
     *
     *  This function can be used to compose the results of two functions.
     */
    map<U>(op: TransformFn<T, U>): ClassicResult<U, E>;

    /**
     *  Maps a `Result<T, E>` to `U` by applying a function to a contained `Ok` value,
     *  or a `fallback` function to a contained `Err` value.
     *  This function can be used to unpack a successful result while handling an error.
     */
    mapOrElse<U>(fallback: RecoveryFromErrorFn<E, U>, selector: TransformFn<T, U>): U;

    /**
     *  Maps a `Result<T, E>` to `Result<T, F>` by applying a function `mapFn<E, F>`
     *  to an contained `Err` value, leaving an `Ok` value untouched.
     *
     *  This function can be used to pass through a successful result while handling an error.
     */
    mapErr<F>(op: TransformFn<E, F>): ClassicResult<T, F>;

    /**
     *  Returns `res` if the result is `Ok`, otherwise returns the `Err` value of self.
     */
    and<U>(res: ClassicResult<U, E>): ClassicResult<U, E>;

    /**
     *  Calls `op` if the result is `Ok`, otherwise returns the `Err` value of self.
     *  This function can be used for control flow based on result values.
     */
    andThen<U>(op: ClassicTryTransformFn<T, U, E>): ClassicResult<U, E>;

    /**
     *  Returns `res` if the result is `Err`, otherwise returns the `Ok` value of self.
     */
    or<F>(res: ClassicResult<T, F>): ClassicResult<T, F>;

    /**
     *  Calls `op` if the result is `Err`, otherwise returns the `Ok` value of self.
     *  This function can be used for control flow based on result values.
     */
    orElse<F>(op: ClassicTryRecoverFromErrorFn<T, E, F>): ClassicResult<T, F>;

    /**
     *  Return the inner `T` of a `Ok(T)`.
     *
     *  @throws {Error}
     *      Throws if the self is a `Err`.
     */
    unwrap(): T | never;

    /**
     *  Return the inner `E` of a `Err(E)`.
     *
     *  @throws {Error}
     *      Throws if the self is a `Ok`.
     */
    unwrapErr(): E | never;

    /**
     *  Unwraps a result, return the content of an `Ok`. Else it returns `optb`.
     */
    unwrapOr(optb: T): T;

    /**
     *  Unwraps a result, returns the content of an `Ok`.
     *  If the value is an `Err` then it calls `op` with its value.
     */
    unwrapOrElse(op: RecoveryFromErrorFn<E, T>): T;

    /**
     *  Return the inner `T` of a `Ok(T)`.
     *
     *  @throws {Error}
     *      Throws the passed `message` if the self is a `Err`.
     */
    expect(message: string): T | never;

    /**
     *  The destructor method inspired by Rust's `Drop` trait.
     *  We don't define the object's behavior after calling this.
     *
     *  @param  destructor
     *      This would be called with the inner value if self is `Ok<T>`.
     *  @param  errDestructor
     *      This would be called with the inner value if self is `Err<E>`.
     */
    drop(destructor?: EffectFn<T>, errDestructor?: EffectFn<E>): void;
}

/**
 *  @deprecated
 *      See https://github.com/option-t/option-t/issues/459
 *
 * XXX:
 * This is only used for the instanceof-basis runtime checking. (e.g. `React.PropTypes.instanceOf()`)
 * You MUST NOT use for other purpose.
 */
export abstract class ClassicResultBase<T, E> implements ClassicResultable<T, E> {
    private readonly _isOk: boolean;
    private readonly _v: T | undefined;
    private readonly _e: E | undefined;

    protected constructor(ok: boolean, val: T | undefined, err: E | undefined) {
        this._isOk = ok;
        this._v = val;
        this._e = err;
        Object.seal(this);
    }

    /**
     *  Returns true if the result is `Ok`.
     */
    isOk(): this is ClassicOk<T, E> {
        return this._isOk;
    }

    /**
     *  Returns true if the result is `Err`.
     */
    isErr(): this is ClassicErr<T, E> {
        return !this._isOk;
    }

    /**
     *  Converts from `Result<T, E>` to `Option<T>`.
     *  If the self is `Ok`, returns `Some<T>`.
     *  Otherwise, returns `None<T>`.
     *
     *  @return {!OptionT<T>}
     */
    ok(): ClassicOption<T> {
        if (this._isOk) {
            // This code is required to keep backward compatibility.
            // @ts-expect-error
            return createClassicSome(this._v);
        } else {
            return createClassicNone<T>();
        }
    }

    /**
     *  Converts from `Result<T, E>` to `Option<E>`.
     *  If the self is `Err`, returns `Some<E>`.
     *  Otherwise, returns `None<E>`.
     *
     *  @return {!OptionT<E>}
     */
    err(): ClassicOption<E> {
        if (!this._isOk) {
            // This code is required to keep backward compatibility.
            // @ts-expect-error
            return createClassicSome(this._e);
        } else {
            return createClassicNone();
        }
    }
    /**
     *  Maps a `Result<T, E>` to `Result<U, E>` by applying a function `mapFn<T, U>`
     *  to an contained `Ok` value, leaving an `Err` value untouched.
     *
     *  This function can be used to compose the results of two functions.
     */
    map<U>(op: TransformFn<T, U>): ClassicResult<U, E> {
        if (!this._isOk) {
            // cheat to escape from a needless allocation.
            // @ts-expect-error
            return this;
        }

        // This code is required to keep backward compatibility.
        // @ts-expect-error
        const value = op(this._v);
        const result = createClassicOk<U, E>(value);
        return result;
    }

    /**
     *  Maps a `Result<T, E>` to `U` by applying a function to a contained `Ok` value,
     *  or a `fallback` function to a contained `Err` value.
     *  This function can be used to unpack a successful result while handling an error.
     */
    mapOrElse<U>(fallback: RecoveryFromErrorFn<E, U>, selector: TransformFn<T, U>): U {
        if (!this._isOk) {
            // This code is required to keep backward compatibility.
            // @ts-expect-error
            const r = fallback(this._e);
            return r;
        }

        // This code is required to keep backward compatibility.
        // @ts-expect-error
        const r = selector(this._v);
        return r;
    }

    /**
     *  Maps a `Result<T, E>` to `Result<T, F>` by applying a function `mapFn<E, F>`
     *  to an contained `Err` value, leaving an `Ok` value untouched.
     *
     *  This function can be used to pass through a successful result while handling an error.
     */
    mapErr<F>(op: TransformFn<E, F>): ClassicResult<T, F> {
        if (this._isOk) {
            // cheat to escape from a needless allocation.
            // @ts-expect-error
            return this;
        }

        // This code is required to keep backward compatibility.
        // @ts-expect-error
        const value = op(this._e);
        const result = createClassicErr<T, F>(value);
        return result;
    }

    /**
     *  Returns `res` if the result is `Ok`, otherwise returns the `Err` value of self.
     */
    and<U>(res: ClassicResult<U, E>): ClassicResult<U, E> {
        if (this._isOk) {
            return res;
        } else {
            // cheat to escape from a needless allocation.
            // @ts-expect-error
            return this;
        }
    }

    /**
     *  Calls `op` if the result is `Ok`, otherwise returns the `Err` value of self.
     *  This function can be used for control flow based on result values.
     */
    andThen<U>(op: ClassicTryTransformFn<T, U, E>): ClassicResult<U, E> {
        if (!this._isOk) {
            // cheat to escape from a needless allocation.
            // @ts-expect-error
            return this;
        }

        // This code is required to keep backward compatibility.
        // @ts-expect-error
        const mapped = op(this._v);
        const isResult = mapped instanceof ClassicResultBase;
        if (!isResult) {
            throw new TypeError("Result<T, E>.andThen()' param `op` should return `Result<U, E>`.");
        }

        return mapped;
    }

    /**
     *  Returns `res` if the result is `Err`, otherwise returns the `Ok` value of self.
     */
    or<F>(res: ClassicResult<T, F>): ClassicResult<T, F> {
        if (this._isOk) {
            // cheat to escape from a needless allocation.
            // @ts-expect-error
            return this;
        } else {
            return res;
        }
    }

    /**
     *  Calls `op` if the result is `Err`, otherwise returns the `Ok` value of self.
     *  This function can be used for control flow based on result values.
     */
    orElse<F>(op: ClassicTryRecoverFromErrorFn<T, E, F>): ClassicResult<T, F> {
        if (this._isOk) {
            // cheat to escape from a needless allocation.
            // @ts-expect-error
            return this;
        }

        // This code is required to keep backward compatibility.
        // @ts-expect-error
        const mapped = op(this._e);
        const isResult = mapped instanceof ClassicResultBase;
        if (!isResult) {
            throw new TypeError("Result<T, E>.orElse()' param `op` should return `Result<T, F>`.");
        }

        return mapped;
    }

    /**
     *  Return the inner `T` of a `Ok(T)`.
     *
     *  @throws {TypeError}
     *      Throws if the self is a `Err`.
     */
    unwrap(): T | never {
        return this.expect('called `unwrap()` on a `Err` value');
    }

    /**
     *  Return the inner `E` of a `Err(E)`.
     *
     *  @throws {TypeError}
     *      Throws if the self is a `Ok`.
     */
    unwrapErr(): E | never {
        if (this._isOk) {
            throw new TypeError('called `unwrapErr()` on a `Ok` value');
        } else {
            // This code is required to keep backward compatibility.
            // @ts-expect-error
            return this._e;
        }
    }

    /**
     *  Unwraps a result, return the content of an `Ok`. Else it returns `optb`.
     */
    unwrapOr(optb: T): T {
        if (this._isOk) {
            // This code is required to keep backward compatibility.
            // @ts-expect-error
            return this._v;
        } else {
            return optb;
        }
    }

    /**
     *  Unwraps a result, returns the content of an `Ok`.
     *  If the value is an `Err` then it calls `op` with its value.
     */
    unwrapOrElse(op: RecoveryFromErrorFn<E, T>): T {
        if (this._isOk) {
            // This code is required to keep backward compatibility.
            // @ts-expect-error
            return this._v;
        }

        // This code is required to keep backward compatibility.
        // @ts-expect-error
        const recovered = op(this._e);
        return recovered;
    }

    /**
     *  Return the inner `T` of a `Ok(T)`.
     *
     *  @throws {TypeError}
     *      Throws the passed `message` if the self is a `Err`.
     */
    expect(message: string): T | never {
        if (this._isOk) {
            // This code is required to keep backward compatibility.
            // @ts-expect-error
            return this._v;
        } else {
            throw new TypeError(message);
        }
    }

    /**
     *  The destructor method inspired by Rust's `Drop` trait.
     *  We don't define the object's behavior after calling this.
     *
     *  @param  destructor
     *      This would be called with the inner value if self is `Ok<T>`.
     *  @param  errDestructor
     *      This would be called with the inner value if self is `Err<E>`.
     */
    drop(destructor?: EffectFn<T>, errDestructor?: EffectFn<E>): void {
        if (this._isOk) {
            if (typeof destructor === 'function') {
                // This code is required to keep backward compatibility.
                // @ts-expect-error
                destructor(this._v);
            }
            // This code is required to keep backward compatibility.
            // @ts-expect-error
            this._v = null;
        } else {
            if (typeof errDestructor === 'function') {
                // This code is required to keep backward compatibility.
                // @ts-expect-error
                errDestructor(this._e);
            }
            // This code is required to keep backward compatibility.
            // @ts-expect-error
            this._e = null;
        }
        Object.freeze(this);
    }
}
Object.freeze(ClassicResultBase.prototype);

/**
 *  @deprecated
 *      We keep this only for backward compatibility.
 *      See https://github.com/option-t/option-t/issues/459
 */
interface ClassicOk<T, E> extends ClassicResultable<T, E> {
    ok(): Some<T>;
    err(): None<E>;
    unwrap(): T;
    unwrapErr(): never;
    unwrapOr(optb: T): T;
    expect(message: string): T;
}

/**
 *  @deprecated
 *      We keep this only for backward compatibility.
 *      See https://github.com/option-t/option-t/issues/459
 *
 *  XXX:
 *  This class intend to represent the container of some error type `E`.
 *  So we don't define this as `Error`'s subclass
 *  or don't restrict type parameter `E`'s upper bound to `Error`.
 */
interface ClassicErr<T, E> extends ClassicResultable<T, E> {
    ok(): None<T>;
    err(): Some<E>;
    unwrap(): never;
    unwrapErr(): E;
    expect(message: string): never;
}

/**
 *  @deprecated
 *      See https://github.com/option-t/option-t/issues/459
 *
 *  The Result/Either type interface whose APIs are inspired
 *  by Rust's `std::result::Result<T, E>`.
 *
 *  _We recommend to use utility types & functions (`PlainResult/Result<T, E>`)
 *  if you don't have to use `instanceof` check and
 *  you should avoid to expose this object as a public API of your package_
 *  because `instanceof` checking might not work correctly if a user project has
 *  multiple version of this package in their dependencies.
 *  See ([#337](https://github.com/option-t/option-t/pull/337)).
 *
 *  Furthermore, we don't have a plan to implements a new API aggressively for this object
 *  because we need to implement it on `.prototype`
 *  and it might be hard to remove unused methods from `.prototype` on minifying.
 *  We could resolve this problem for the future release but today is not so.
 *
 *  See [#378](https://github.com/option-t/option-t/issues/378)
 *
 *  And some operators might not return a new object and reuse the input
 *  to reduce an object allocation. Thus comparing _this `Option<T>`` is meaningles.
 *  This is by design because we think this pattern is meaningless.
 */
export type ClassicResult<T, E> = ClassicOk<T, E> | ClassicErr<T, E>;

/**
 *  @deprecated
 *      See https://github.com/option-t/option-t/issues/459
 */
export function createClassicOk<T, E>(val: T): ClassicOk<T, E> {
    // This code is required to keep backward compatibility.
    // @ts-expect-error
    const o = new ClassicResultBase<T, E>(true, val, undefined);
    return o;
}

/**
 *  @deprecated
 *      See https://github.com/option-t/option-t/issues/459
 */
export function createClassicErr<T, E>(err: E): ClassicErr<T, E> {
    // This code is required to keep backward compatibility.
    // @ts-expect-error
    const o = new ClassicResultBase<T, E>(false, undefined, err);
    return o;
}

/**
 *  @deprecated
 *      See https://github.com/option-t/option-t/issues/459
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ClassicOkConstructor: new <T, E>(val: T) => ClassicOk<T, E> =
    function ClassicOkConstructor<T, E>(val: T) {
        return createClassicOk<T, E>(val);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any;

/**
 *  @deprecated
 *      See https://github.com/option-t/option-t/issues/459
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ClassicErrConstructor: new <T, E>(err: E) => ClassicErr<T, E> =
    function ClassicErrConstructor<T, E>(err: E) {
        return createClassicErr<T, E>(err);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any;
