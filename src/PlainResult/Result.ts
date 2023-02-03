/**
 *
 *  This is [_result type_](https://en.wikipedia.org/wiki/Result_type).
 *
 *  ## CAUTION:
 *
 *  ### Be careful to use `===` or `Object.is()` to compare the equality of this type
 *
 *  You should use `equal` operator to check the equality for two objects of this type
 *  instead of `===` or `Object.is()`.
 *  Operators for this type sometimes return the inputted object directly
 *  to avoid an unnecessary objecti allocation.
 *
 *  We use this design by the assumption that we would not compare `a` and `b` usually in the following case.
 *  It usually suggest some design problems if you would like to compare these `a` and `b`.
 *
 *  ```typescript
 *  const a = createOk(val);
 *  const b = andThen(a, someOperation);
 *  ```
 */
export type Result<T, E> = Ok<T> | Err<E>;

/**
 *  This type contain a success value _T_.
 *
 *  You can create this type value and get an inner value in this type by hand.
 *  But we recommend to use the factory {@link createOk()} and utility functions for forward compatibility.
 *
 *  - {@link createOk()} to create a value of `Ok(T)`.
 *  - {@link isOk()} to check whether the value is `Ok(T)`.
 *  - `unwrapOk()` to get an inner value in `Ok(T)`.
 *  - `unwrapOr()` to get either an inner value in `Ok(T)` or a fallback default value.
 *  - ...and more.
 */
export interface Ok<T> {
    /**
     *  Don't touch this property directly from an user project
     *  except 3rd party project that does not install this package but uses a value returned from an other project.
     *  Instead, use {@link isOk()} or {@link isErr()} operator to get an inner value.
     *
     *  Historically, this type was created to target a JSVM that supports ES5.
     *  Then there was no well optimized `Symbol` to achieve a private property.
     *  We don't have a plan to change this into private property keep the backward compatibility.
     */
    readonly ok: true;
    /**
     *  Don't touch this property directly from an user project
     *  except 3rd party project that does not install this package but uses a value returned from an other project.
     *  Instead, use `unwrapOk()` operator to get an inner value.
     *
     *  Historically, this type was created to target a JSVM that supports ES5.
     *  Then there was no well optimized `Symbol` to achieve a private property.
     *  We don't have a plan to change this into private property keep the backward compatibility.
     */
    readonly val: T;

    // To keep the same shape (hidden class or structure) with the other.
    // we should initialize this property.
    //
    // As I remembered, when I had introduced this property in early 2018,
    // I tested a shape transition for some engines. By their results,
    // I concluded `Ok` and `Err` should have same properties to make to use the same shape.
    //
    //  - Modern JSVMs in web engines used a single shape.
    //      - Inline cache would be monomorphic.
    //      - I tested JavaScriptCore (for Safari 15.4), SpiderMonkey (for Firefox v99), and V8 9.9.
    //  - Old V8 used an another hidden class if `val` is `number` or others.
    //      - Inline cache for an object taking this type would be polymorphic.
    //      - But we can assume that it will not be megamorphic by the observation.
    //
    // Of course, this decision has some drawbacks for users of this package.
    //
    //  1. If user use `Object.hasOwnProperty` or `for-in` statement fot this object,
    //     this property will be leaked accidentally.
    //     However, we don't think it is a common operation for user because we provide `is~~()` function
    //     and user will not do their operations generally for a "container" object like this type.
    //
    //  2. If user will use `const { ok, err }` = Ok;`, then val will be `null`.
    //     We can say same thing for `Err`.
    //
    // By these reasons, we should not recommend to create this object without this factory function.
    // User can create this object by hand. But it's fragile for the future change. So We should not recommend it.
    //
    // We use `null | undefined` as more widen type rather than `null` for the backward compatibility.
    // This definition allows to accept a value created by the old version of this library.
    /**
     *  Don't touch this property directly from an user project.
     *  Instead, use `unwrapErr()` operator to get an inner value.
     *
     *  Historically, this type was created to target a JSVM that supports ES5.
     *  Then there was no well optimized `Symbol` to achieve a private property.
     *  We don't have a plan to change this into private property keep the backward compatibility.
     */
    readonly err?: null | undefined;
}

export function isOk<T, E>(input: Result<T, E>): input is Ok<T> {
    return input.ok;
}

export function createOk<T>(val: T): Ok<T> {
    const r: Ok<T> = {
        ok: true,
        val,
        // XXX: We need to fill with `null` to improve the compatibility with Next.js
        // see https://github.com/karen-irc/option-t/pull/1256
        err: null,
    };
    return r;
}

/**
 *  This type contain a failure information _E_.
 *
 *  You can create this type value and get an inner value in this type by hand.
 *  But we recommend to use the factory {@link createErr()} and utility functions for forward compatibility.
 *
 *  - {@link createErr()} to create a value of `Err(E)`.
 *  - {@link isErr()} to check whether the value is `Err(E)`.
 *  - `unwrapErr()` to get an inner failure information in `Err(E)`.
 *  - ...and more.
 */
export interface Err<E> {
    /**
     *  Don't touch this property directly from an user project
     *  except 3rd party project that does not install this package but uses a value returned from an other project.
     *  Instead, use {@link isOk()} or {@link isErr()} operator to get an inner value.
     *
     *  Historically, this type was created to target a JSVM that supports ES5.
     *  Then there was no well optimized `Symbol` to achieve a private property.
     *  We don't have a plan to change this into private property keep the backward compatibility.
     */
    readonly ok: false;

    // To keep the same shape (hidden class or structure) with the other.
    // we should initialize this property.
    //
    // As I remembered, when I had introduced this property in early 2018,
    // I tested a shape transition for some engines. By their results,
    // I concluded `Ok` and `Err` should have same properties to make to use the same shape.
    //
    //  - Modern JSVMs in web engines used a single shape.
    //      - Inline cache would be monomorphic.
    //      - I tested JavaScriptCore (for Safari 15.4), SpiderMonkey (for Firefox v99), and V8 9.9.
    //  - Old V8 used an another hidden class if `val` is `number` or others.
    //      - Inline cache for an object taking this type would be polymorphic.
    //      - But we can assume that it will not be megamorphic by the observation.
    //
    // Of course, this decision has some drawbacks for users of this package.
    //
    //  1. If user use `Object.hasOwnProperty` or `for-in` statement fot this object,
    //     this property will be leaked accidentally.
    //     However, we don't think it is a common operation for user because we provide `is~~()` function
    //     and user will not do their operations generally for a "container" object like this type.
    //
    //  2. If user will use `const { ok, err }` = Ok;`, then val will be `null`.
    //     We can say same thing for `Err`.
    //
    // By these reasons, we should not recommend to create this object without this factory function.
    // User can create this object by hand. But it's fragile for the future change. So We should not recommend it.
    //
    // We use `null | undefined` as more widen type rather than `null` for the backward compatibility.
    // This definition allows to accept a value created by the old version of this library.
    /**
     *  Don't touch this property directly from an user project
     *  except 3rd party project that does not install this package but uses a value returned from an other project.
     *  Instead, use `unwrapOk()` operator to get an inner value.
     *
     *  Historically, this type was created to target a JSVM that supports ES5.
     *  Then there was no well optimized `Symbol` to achieve a private property.
     *  We don't have a plan to change this into private property keep the backward compatibility.
     */
    readonly val?: null | undefined;

    /**
     *  Don't touch this property directly from an user project
     *  except 3rd party project that does not install this package but uses a value returned from an other project.
     *  Instead, use `unwrapErr()` operator to get an inner value.
     *
     *  Historically, this type was created to target a JSVM that supports ES5.
     *  Then there was no well optimized `Symbol` to achieve a private property.
     *  We don't have a plan to change this into private property keep the backward compatibility.
     */
    readonly err: E;
}

export function isErr<T, E>(input: Result<T, E>): input is Err<E> {
    return !input.ok;
}

export function createErr<E>(err: E): Err<E> {
    const r: Err<E> = {
        ok: false,
        // XXX: We need to fill with `null` to improve the compatibility with Next.js
        // see https://github.com/karen-irc/option-t/pull/1256
        val: null,
        err,
    };
    return r;
}
