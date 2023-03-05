import type { TransformFn, RecoveryFn, EffectFn } from '../internal/function.ts';

/**
 *  @deprecated
 *      See https://github.com/option-t/option-t/issues/459
 */
export type ClassicTryTransformFn<T, U> = TransformFn<T, ClassicOption<U>>;

/**
 *  @deprecated
 *      See https://github.com/option-t/option-t/issues/459
 */
export type ClassicTryRecoveryFn<T> = RecoveryFn<ClassicOption<T>>;

/**
 *  @deprecated
 *      We keep this only for backward compatibility.
 *      See https://github.com/option-t/option-t/issues/459
 */
interface ClassicOptionable<T> {
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
    map<U>(fn: TransformFn<T, U>): ClassicOption<U>;

    /**
     *  Return `None` if the self is `None`,
     *  otherwise call `fn` with the wrapped value and return the result.
     *
     *  @param  fn
     *      The function which is applied to the contained value and return the result
     *      if the self is a `Some<T>`. This result will be flattened once.
     */
    flatMap<U>(fn: ClassicTryTransformFn<T, U>): ClassicOption<U>;

    /**
     *  Apply a function `fn` to the contained value or return a default `def`.
     *
     *  @param  def
     *      The default value which is used if the self is a `None`.
     *  @param  fn
     *      The function which is applied to the contained value and return the result
     *      if the self is a `Some<T>`.
     */
    mapOr<U>(def: U, fn: TransformFn<T, U>): U;

    /**
     *  Apply a function `fn` to the contained value or produce a default result by `defFn`.
     *
     *  @param  defFn
     *      The function which produces a default value which is used if the self is a `None`.
     *  @param  fn
     *      The function which is applied to the contained value and return the result
     *      if the self is a `Some<T>`.
     */
    mapOrElse<U>(def: RecoveryFn<U>, fn: TransformFn<T, U>): U;

    /**
     *  Return the passed value if the self is `Some<T>`,
     *  otherwise return `None`.
     *
     *  @param  optb
     *      The value which is returned if the self is a `Some<T>`.
     */
    and<U>(optb: ClassicOption<U>): ClassicOption<U>;

    /**
     *  The alias of `Option<T>.flatMap()`.
     *
     *  @param  fn
     */
    andThen<U>(fn: ClassicTryTransformFn<T, U>): ClassicOption<U>;

    /**
     *  Return the self if it contains a value, otherwise return `optb`.
     *
     *  @param  optb
     *      The default value which is used if the self is a `None`.
     */
    or(optb: ClassicOption<T>): ClassicOption<T>;

    /**
     *  Return the self if it contains a value,
     *  otherwise call `fn` and returns the result.
     *
     *  @param  fn
     *      The function which produces a default value which is used if the self is a `None`.
     */
    orElse(fn: ClassicTryRecoveryFn<T>): ClassicOption<T>;

    /**
     *  Finalize the self.
     *  After this is called, the object's behavior is not defined.
     *
     *  This method is inspired by Rust's `Drop` trait.
     *
     *  @param  destructor
     *      This would be called with the inner value if self is `Some<T>`.
     */
    drop(destructor?: EffectFn<T>): void;
}

/**
 *  @deprecated
 *      See https://github.com/option-t/option-t/issues/459
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
 *  https://github.com/option-t/option-t/pull/77
 */
export abstract class ClassicOptionBase<T> implements ClassicOptionable<T> {
    private readonly ok: boolean;
    private readonly val: T | undefined;

    readonly isSome: boolean;
    readonly isNone: boolean;

    protected constructor(ok: boolean, val: T | undefined);

    unwrap(): T | never;
    unwrapOr(def: T): T;
    unwrapOrElse(fn: RecoveryFn<T>): T;
    expect(msg: string): T | never;
    map<U>(fn: TransformFn<T, U>): ClassicOption<U>;
    flatMap<U>(fn: ClassicTryTransformFn<T, U>): ClassicOption<U>;
    mapOr<U>(def: U, fn: TransformFn<T, U>): U;
    mapOrElse<U>(def: RecoveryFn<U>, fn: TransformFn<T, U>): U;
    and<U>(optb: ClassicOption<U>): ClassicOption<U>;
    andThen<U>(fn: ClassicTryTransformFn<T, U>): ClassicOption<U>;
    or(optb: ClassicOption<T>): ClassicOption<T>;
    orElse(fn: ClassicTryRecoveryFn<T>): ClassicOption<T>;
    drop(destructor?: EffectFn<T>): void;
    // FYI: this is json representation.
    // eslint-disable-next-line @typescript-eslint/naming-convention
    toJSON(): { is_some: boolean; value: T | undefined };
}

/**
 *  @deprecated
 *      We keep this only for backward compatibility.
 *      See https://github.com/option-t/option-t/issues/459
 */
export interface ClassicSome<T> extends ClassicOptionable<T> {
    readonly isSome: true;
    readonly isNone: false;
    unwrap(): T;
    expect(msg: string): T;
}

/**
 *  @deprecated
 *      We keep this only for backward compatibility.
 *      See https://github.com/option-t/option-t/issues/459
 */
export interface ClassicNone<T> extends ClassicOptionable<T> {
    readonly isSome: false;
    readonly isNone: true;
    unwrap(): never;
    expect(msg: string): never;
}

/**
 *  @deprecated
 *      See https://github.com/option-t/option-t/issues/459
 *
 *  The Option/Maybe type interface whose APIs are inspired
 *  by Rust's `std::option::Option<T>`.
 *
 *  _We recommend to use utility types & functions (`PlainOption/Option<T>`)
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
export type ClassicOption<T> = ClassicSome<T> | ClassicNone<T>;

/**
 *  @deprecated
 *      See https://github.com/option-t/option-t/issues/459
 */
export declare function createClassicSome<T>(val: T): ClassicSome<T>;

/**
 *  @deprecated
 *      See https://github.com/option-t/option-t/issues/459
 */
export declare function createClassicNone<T>(): ClassicNone<T>;

/**
 *  @deprecated
 *      See https://github.com/option-t/option-t/issues/459
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export declare const ClassicSomeConstructor: new <T>(val: T) => ClassicSome<T>;

/**
 *  @deprecated
 *      See https://github.com/option-t/option-t/issues/459
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export declare const ClassicNoneConstructor: new <T>() => ClassicNone<T>;
