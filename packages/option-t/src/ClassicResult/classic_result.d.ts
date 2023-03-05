import type {
    ClassicOption,
    ClassicSome as Some,
    ClassicNone as None,
} from '../ClassicOption/classic_option.js';
import type { TransformFn, RecoveryFromErrorFn, EffectFn } from '../internal/function.ts';

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

    protected constructor(ok: boolean, val: T | undefined, err: E | undefined);

    isOk(): this is ClassicOk<T, E>;
    isErr(): this is ClassicErr<T, E>;
    ok(): ClassicOption<T>;
    err(): ClassicOption<E>;
    map<U>(op: TransformFn<T, U>): ClassicResult<U, E>;
    mapOrElse<U>(fallback: RecoveryFromErrorFn<E, U>, selector: TransformFn<T, U>): U;
    mapErr<F>(op: TransformFn<E, F>): ClassicResult<T, F>;
    and<U>(res: ClassicResult<U, E>): ClassicResult<U, E>;
    andThen<U>(op: ClassicTryTransformFn<T, U, E>): ClassicResult<U, E>;
    or<F>(res: ClassicResult<T, F>): ClassicResult<T, F>;
    orElse<F>(op: ClassicTryRecoverFromErrorFn<T, E, F>): ClassicResult<T, F>;
    unwrap(): T | never;
    unwrapErr(): E | never;
    unwrapOr(optb: T): T;
    unwrapOrElse(op: RecoveryFromErrorFn<E, T>): T;
    expect(message: string): T | never;
    drop(destructor?: EffectFn<T>, errDestructor?: EffectFn<E>): void;
}

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
export declare function createClassicOk<T, E>(val: T): ClassicOk<T, E>;

/**
 *  @deprecated
 *      See https://github.com/option-t/option-t/issues/459
 */
export declare function createClassicErr<T, E>(err: E): ClassicErr<T, E>;

/**
 *  @deprecated
 *      See https://github.com/option-t/option-t/issues/459
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export declare const ClassicOkConstructor: new <T, E>(val: T) => ClassicOk<T, E>;

/**
 *  @deprecated
 *      See https://github.com/option-t/option-t/issues/459
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export declare const ClassicErrConstructor: new <T, E>(err: E) => ClassicErr<T, E>;
