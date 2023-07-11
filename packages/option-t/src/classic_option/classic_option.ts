import type { TransformFn, RecoveryFn, EffectFn } from '../internal/function.js';

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

    protected constructor(ok: boolean, val: T | undefined) {
        this.ok = ok;
        this.val = val;
        Object.seal(this);
    }

    /**
     *  Return whether this is `Some<T>` or not.
     */
    get isSome(): boolean {
        return this.ok;
    }

    /**
     *  Return whether this is `None` or not.
     */
    get isNone(): boolean {
        return !this.ok;
    }

    /**
     *  Returns the inner `T` of a `Some<T>`.
     *  @throws {TypeError}
     *      Throws if the self value equals `None`.
     */
    unwrap(): T | never {
        if (!this.ok) {
            throw new TypeError('called `unwrap()` on a `None` value');
        }

        // This code is required to keep backward compatibility.
        // @ts-expect-error
        return this.val;
    }

    /**
     *  Returns the contained value or a default value `def`.
     */
    unwrapOr(def: T): T {
        // This code is required to keep backward compatibility.
        // @ts-expect-error
        return this.ok ? this.val : def;
    }

    /**
     *  Returns the contained value or computes it from a closure `fn`.
     */
    unwrapOrElse(fn: RecoveryFn<T>): T {
        // This code is required to keep backward compatibility.
        // @ts-expect-error
        return this.ok ? this.val : fn();
    }

    /**
     *  Returns the inner `T` of a `Some<T>`.
     *  @throws {TypeError}
     *      Throws a custom error with provided `msg`
     *      if the self value equals `None`.
     */
    expect(msg: string): T | never {
        if (!this.ok) {
            throw new TypeError(msg);
        }

        // This code is required to keep backward compatibility.
        // @ts-expect-error
        return this.val;
    }

    /**
     *  Maps an `Option<T>` to `Option<U>` by applying a function to a contained value.
     */
    map<U>(fn: TransformFn<T, U>): ClassicOption<U> {
        if (!this.ok) {
            // cheat to escape from a needless allocation.
            // @ts-expect-error
            return this;
        }

        // This code is required to keep backward compatibility.
        // @ts-expect-error
        const value = fn(this.val);
        const option = createClassicSome(value);
        return option;
    }

    /**
     *  Returns `None` if the self is `None`,
     *  otherwise calls `fn` with the wrapped value and returns the result.
     */
    flatMap<U>(fn: ClassicTryTransformFn<T, U>): ClassicOption<U> {
        if (!this.ok) {
            // cheat to escape from a needless allocation.
            // @ts-expect-error
            return this;
        }

        // This code is required to keep backward compatibility.
        // @ts-expect-error
        const mapped = fn(this.val);
        const isOption = mapped instanceof ClassicOptionBase;
        if (!isOption) {
            throw new TypeError("Option<T>.flatMap()' param `fn` should return `Option<T>`.");
        }

        return mapped;
    }

    /**
     *  Applies a function `fn` to the contained value or returns a default `def`.
     */
    mapOr<U>(def: U, fn: TransformFn<T, U>): U {
        if (this.ok) {
            // This code is required to keep backward compatibility.
            // @ts-expect-error
            return fn(this.val);
        } else {
            return def;
        }
    }

    /**
     *  Applies a function `fn` to the contained value or computes a default result by `defFn`.
     */
    mapOrElse<U>(def: RecoveryFn<U>, fn: TransformFn<T, U>): U {
        if (this.ok) {
            // This code is required to keep backward compatibility.
            // @ts-expect-error
            return fn(this.val);
        } else {
            return def();
        }
    }

    /**
     *  Returns `None` if the self is `None`, otherwise returns `optb`.
     */
    and<U>(optb: ClassicOption<U>): ClassicOption<U> {
        // This code is required to keep backward compatibility.
        // @ts-expect-error
        return this.ok ? optb : this;
    }

    /**
     *  The alias of `Option<T>.flatMap()`.
     */
    andThen<U>(fn: ClassicTryTransformFn<T, U>): ClassicOption<U> {
        return this.flatMap(fn);
    }

    /**
     *  Returns the self if it contains a value, otherwise returns `optb`.
     *
     *  @template   T
     *
     *  @param  {!Option<T>} optb
     *  @return {!Option<T>}
     */
    or(optb: ClassicOption<T>): ClassicOption<T> {
        // This code is required to keep backward compatibility.
        // @ts-expect-error
        return this.ok ? this : optb;
    }

    /**
     *  Returns the self if it contains a value,
     *  otherwise calls `fn` and returns the result.
     */
    orElse(fn: ClassicTryRecoveryFn<T>): ClassicOption<T> {
        if (this.ok) {
            // This code is required to keep backward compatibility.
            // @ts-expect-error
            return this;
        } else {
            const value = fn();
            if (value instanceof ClassicOptionBase) {
                return value;
            }

            throw new TypeError("Option<T>.orElse()' param `fn` should return `Option<T>`.");
        }
    }

    /**
     *  Finalize the self.
     *  After this is called, the object's behavior is not defined.
     *
     *  @param destructor
     *      This would be called with the inner value if self is `Some<T>`.
     */
    drop(destructor?: EffectFn<T>): void {
        if (this.ok && typeof destructor === 'function') {
            // This code is required to keep backward compatibility.
            // @ts-expect-error
            destructor(this.val);
        }

        // This code is required to keep backward compatibility.
        // @ts-expect-error
        this.val = null;
        Object.freeze(this);
    }

    // FYI: this is json representation.
    // eslint-disable-next-line @typescript-eslint/naming-convention
    toJSON(): { is_some: boolean; value: T | undefined } {
        return {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            is_some: this.ok,
            value: this.val,
        };
    }
}
Object.freeze(ClassicOptionBase.prototype);

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
export function createClassicSome<T>(val: T): ClassicSome<T> {
    // This code is required to keep backward compatibility.
    // @ts-expect-error
    const o = new ClassicOptionBase(true, val);
    return o;
}

/**
 *  @deprecated
 *      See https://github.com/option-t/option-t/issues/459
 */
export function createClassicNone<T>(): ClassicNone<T> {
    // This code is required to keep backward compatibility.
    // @ts-expect-error
    const o = new ClassicOptionBase(false, undefined);
    return o;
}

/**
 *  @deprecated
 *      See https://github.com/option-t/option-t/issues/459
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ClassicSomeConstructor: new <T>(val: T) => ClassicSome<T> =
    function ClassicSomeConstructor<T>(val: T) {
        return createClassicSome(val);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any;

/**
 *  @deprecated
 *      See https://github.com/option-t/option-t/issues/459
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ClassicNoneConstructor: new <T>() => ClassicNone<T> = function ClassicNoneConstructor<
    T,
>() {
    return createClassicNone<T>();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
} as any;
