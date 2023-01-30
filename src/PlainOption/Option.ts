/**
 *
 *  This is [_option type_](https://en.wikipedia.org/wiki/Option_type).
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
 *  const a = createSome(val);
 *  const b = andThen(a, someOperation);
 *  ```
 *
 *  ## Remarks
 *  In almost of cases of JavaScript, it's more ergonomic to use `Nullable<T>`, `Undefinable<T>`, or `Maybe<T>`
 *  to represent that either there is some value or not.
 *  We also recommend to use them instead of this type generally.
 *
 *  However, this type is usefil in following case:
 *
 *      1. Migration solution from `PlainResult<T, void>` to `Nullable<T>`, `Undefinable<T>`, or `Maybe<T>`.
 *      2. You need to treat `null` or `undefined` as some value rather than absence of value.
 *
 *  Then this tagged type helps you powerfully.
 */
export type Option<T> = Some<T> | None;

/**
 *  This type contain some value of _T_.
 *
 *  You can create this type value and get an inner value in this type by hand.
 *  But we recommend to use factory and utility functions for forward compatibility.
 *
 *      - `createSome()` to create a value of `Some(T)`.
 *      - `isSome()` to check whether the value is `Some(T)`.
 *      - `unwrap()` to get an inner value in `Some(T)`.
 *      - `unwrapOr()` to get either an inner value in `Some(T)` or a fallback default value.
 *      - ...and more.
 */
export interface Some<T> {
    readonly ok: true;
    /**
     *  @deprecated
     *  Don't touch this property directly from an user project.
     *  Instead, use `unwrap()` operator to get an inner value.
     *
     *  Historically, this type was created to target a JSVM that supports ES5.
     *  Then there was no well optimized `Symbol` to achieve a private property.
     *  We don't have a plan to change this into private property keep the backward compatibility.
     */
    readonly val: T;
}

export function isSome<T>(input: Option<T>): input is Some<T> {
    return input.ok;
}

export function createSome<T>(val: T): Some<T> {
    const r: Some<T> = {
        ok: true,
        val,
    };
    return r;
}

/**
 *  This type represents no value.
 *  This is a pair of `Some(T)`.
 *
 *  You can create this type value and get an inner value in this type by hand.
 *  But we recommend to use factory and utility functions for forward compatibility.
 *
 *      - `createNone()` to create a value of `None`.
 *      - `isNone()` to check whether the value is `None`.
 *      - ...and more.
 */
export interface None {
    readonly ok: false;

    // To keep the same shape (hidden class or structure) with the other.
    // we should initialize this property.
    //
    // As I remembered, when I had introduced this property in early 2018,
    // I tested a shape transition for some engines. By their results,
    // I concluded `Some` and `None` should have same properties to make to use the same shape.
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
    //  2. If user will use `const { ok, val }` = None;`, then val will be `null`.
    //
    // By these reasons, we should not recommend to create this object without this factory function.
    // User can create this object by hand. But it's fragile for the future change. So We should not recommend it.
    //
    // We use `null | undefined` as more widen type rather than `null` for the backward compatibility.
    // This definition allows to accept a value created by the old version of this library.
    /**
     *  @deprecated
     *  Don't touch this property directly from an user project.
     *  Instead, use `unwrap()` operator to get an inner value.
     *
     *  Historically, this type was created to target a JSVM that supports ES5.
     *  Then there was no well optimized `Symbol` to achieve a private property.
     *  We don't have a plan to change this into private property keep the backward compatibility.
     */
    readonly val?: null | undefined;
}

export function isNone<T>(input: Option<T>): input is None {
    return !input.ok;
}

export function createNone(): None {
    const r: None = {
        ok: false,
        // XXX: We need to fill with `null` to improve the compatibility with Next.js
        // see https://github.com/karen-irc/option-t/pull/1256
        val: null,
    };
    return r;
}
