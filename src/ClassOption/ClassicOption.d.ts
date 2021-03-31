import type { MapFn, RecoveryFn, TapFn } from '../shared/Function';

/**
 *  @deprecated
 *      We keep this only for backward compatibility.
 *      See https://github.com/karen-irc/option-t/issues/459
 */
export type ClassicFlatmapFn<T, U> = MapFn<T, ClassicOption<U>>;

/**
 *  @deprecated
 *      We keep this only for backward compatibility.
 *      See https://github.com/karen-irc/option-t/issues/459
 */
export type ClassicMayRecoveryFn<T> = RecoveryFn<ClassicOption<T>>;

interface ClassicOptionable<T> {
    /**
     *  @deprecated
     *      We keep this only for backward compatibility.
     *      See https://github.com/karen-irc/option-t/issues/459
     *
     *  Return whether the self is `Some<T>` or not.
     */
    readonly isSome: boolean;

    /**
     *  @deprecated
     *      We keep this only for backward compatibility.
     *      See https://github.com/karen-irc/option-t/issues/459
     *
     *  Return whether the self is `None` or not.
     */
    readonly isNone: boolean;

    /**
     *  @deprecated
     *      We keep this only for backward compatibility.
     *      See https://github.com/karen-irc/option-t/issues/459
     *
     *  Return the inner `T` of a `Some<T>`.
     *
     *  @throws {Error}
     *      Throws if the self is a `None`.
     */
    unwrap(): T | never;

    /**
     *  @deprecated
     *      We keep this only for backward compatibility.
     *      See https://github.com/karen-irc/option-t/issues/459
     *
     *  Return the contained value or a default value `def`.
     *
     *  @param  def
     *      The default value which is used if the self is a `None`.
     */
    unwrapOr(def: T): T;

    /**
     *  @deprecated
     *      We keep this only for backward compatibility.
     *      See https://github.com/karen-irc/option-t/issues/459
     *
     *  Return the contained value or compute it from a closure `fn`.
     *
     *  @param fn
     *      The function which produces a default value which is used if the self is a `None`.
     */
    unwrapOrElse(fn: RecoveryFn<T>): T;

    /**
     *  @deprecated
     *      We keep this only for backward compatibility.
     *      See https://github.com/karen-irc/option-t/issues/459
     *
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
     *  @deprecated
     *      We keep this only for backward compatibility.
     *      See https://github.com/karen-irc/option-t/issues/459
     *
     *  Map an `Option<T>` to `Option<U>` by applying a function to the contained value.
     *
     *  @param  fn
     *      The function which is applied to the contained value and return the result
     *      if the self is a `Some<T>`.
     */
    map<U>(fn: MapFn<T, U>): ClassicOption<U>;

    /**
     *  @deprecated
     *      We keep this only for backward compatibility.
     *      See https://github.com/karen-irc/option-t/issues/459
     *
     *  Return `None` if the self is `None`,
     *  otherwise call `fn` with the wrapped value and return the result.
     *
     *  @param  fn
     *      The function which is applied to the contained value and return the result
     *      if the self is a `Some<T>`. This result will be flattened once.
     */
    flatMap<U>(fn: ClassicFlatmapFn<T, U>): ClassicOption<U>;

    /**
     *  @deprecated
     *      We keep this only for backward compatibility.
     *      See https://github.com/karen-irc/option-t/issues/459
     *
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
     *  @deprecated
     *      We keep this only for backward compatibility.
     *      See https://github.com/karen-irc/option-t/issues/459
     *
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
     *  @deprecated
     *      We keep this only for backward compatibility.
     *      See https://github.com/karen-irc/option-t/issues/459
     *
     *  Return the passed value if the self is `Some<T>`,
     *  otherwise return `None`.
     *
     *  @param  optb
     *      The value which is returned if the self is a `Some<T>`.
     */
    and<U>(optb: ClassicOption<U>): ClassicOption<U>;

    /**
     *  @deprecated
     *      We keep this only for backward compatibility.
     *      See https://github.com/karen-irc/option-t/issues/459
     *
     *  The alias of `Option<T>.flatMap()`.
     *
     *  @param  fn
     */
    andThen<U>(fn: ClassicFlatmapFn<T, U>): ClassicOption<U>;

    /**
     *  @deprecated
     *      We keep this only for backward compatibility.
     *      See https://github.com/karen-irc/option-t/issues/459
     *
     *  Return the self if it contains a value, otherwise return `optb`.
     *
     *  @param  optb
     *      The default value which is used if the self is a `None`.
     */
    or(optb: ClassicOption<T>): ClassicOption<T>;

    /**
     *  @deprecated
     *      We keep this only for backward compatibility.
     *      See https://github.com/karen-irc/option-t/issues/459
     *
     *  Return the self if it contains a value,
     *  otherwise call `fn` and returns the result.
     *
     *  @param  fn
     *      The function which produces a default value which is used if the self is a `None`.
     */
    orElse(fn: ClassicMayRecoveryFn<T>): ClassicOption<T>;

    /**
     *  @deprecated
     *      We keep this only for backward compatibility.
     *      See https://github.com/karen-irc/option-t/issues/459
     *
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
 *      We keep this only for backward compatibility.
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
    map<U>(fn: MapFn<T, U>): ClassicOption<U>;
    flatMap<U>(fn: ClassicFlatmapFn<T, U>): ClassicOption<U>;
    mapOr<U>(def: U, fn: MapFn<T, U>): U;
    mapOrElse<U>(def: RecoveryFn<U>, fn: MapFn<T, U>): U;
    and<U>(optb: ClassicOption<U>): ClassicOption<U>;
    andThen<U>(fn: ClassicFlatmapFn<T, U>): ClassicOption<U>;
    or(optb: ClassicOption<T>): ClassicOption<T>;
    orElse(fn: ClassicMayRecoveryFn<T>): ClassicOption<T>;
    drop(destructor?: TapFn<T>): void;
    // FYI: this is json representation.
    // eslint-disable-next-line @typescript-eslint/naming-convention
    toJSON(): { is_some: boolean; value: T | undefined };
}

interface ClassicSome<T> extends ClassicOptionable<T> {
    /**
     *  @deprecated
     *      We keep this only for backward compatibility.
     *      See https://github.com/karen-irc/option-t/issues/459
     */
    readonly isSome: true;
    /**
     *  @deprecated
     *      We keep this only for backward compatibility.
     *      See https://github.com/karen-irc/option-t/issues/459
     */
    readonly isNone: false;
    /**
     *  @deprecated
     *      We keep this only for backward compatibility.
     *      See https://github.com/karen-irc/option-t/issues/459
     */
    unwrap(): T;
    /**
     *  @deprecated
     *      We keep this only for backward compatibility.
     *      See https://github.com/karen-irc/option-t/issues/459
     */
    expect(msg: string): T;
}

interface ClassicNone<T> extends ClassicOptionable<T> {
    /**
     *  @deprecated
     *      We keep this only for backward compatibility.
     *      See https://github.com/karen-irc/option-t/issues/459
     */
    readonly isSome: false;
    /**
     *  @deprecated
     *      We keep this only for backward compatibility.
     *      See https://github.com/karen-irc/option-t/issues/459
     */
    readonly isNone: true;
    /**
     *  @deprecated
     *      We keep this only for backward compatibility.
     *      See https://github.com/karen-irc/option-t/issues/459
     */
    unwrap(): never;
    /**
     *  @deprecated
     *      We keep this only for backward compatibility.
     *      See https://github.com/karen-irc/option-t/issues/459
     */
    expect(msg: string): never;
}

/**
 *  @deprecated
 *      We keep this only for backward compatibility.
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
export type ClassicOption<T> = ClassicSome<T> | ClassicNone<T>;

/**
 *  @deprecated
 *      We keep this only for backward compatibility.
 *      See https://github.com/karen-irc/option-t/issues/459
 */
export declare function createClassicSome<T>(val: T): ClassicSome<T>;

/**
 *  @deprecated
 *      We keep this only for backward compatibility.
 *      See https://github.com/karen-irc/option-t/issues/459
 */
export declare function createClassicNone<T>(): ClassicNone<T>;
