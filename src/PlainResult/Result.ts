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
 *  We use this design by the assumption that we would not compare `a` and `b` usually in the following case:
 *
 *  ```typescript
 *  const a = createOk(val);
 *  const b = andThen(a, someOperation);
 *  ```
 */
export type Result<T, E> = Ok<T> | Err<E>;

export interface Ok<T> {
    readonly ok: true;
    readonly val: T;

    // To keep the same shape (hidden class or structure) with the other.
    // we should initialize this property.
    //
    // As I remembered, when I had introduced this property in early 2018,
    // I tested a shape transition for some engines. By their results,
    // I concluded `Ok` and `Err` should have same properties to make to use the same shape.
    //
    //  - V8 used an another hidden class if `val` is `number` or others.
    //      - Inline cache for an object taking this type would be polymorphic.
    //      - But we can assume that it will not be megamorphic by the observation.
    //  - JavaScriptCore used single structure, not like as V8.
    //      - Inline cache would be monomorphic.
    //  - SpiderMonkey, I did not test it. But I assumed it would behave similary with other engines.
    //      - I had not known how I trace for SM casually...
    //
    // Of course, this decision has some drawbacks for users of this package.
    //
    //  1. If user use `Object.hasOwnProperty` or `for-in` statement fot this object,
    //     this property will be leaked accidentally.
    //     However, we don't think it is a common operation for user because we provide `is~~()` function
    //     and user will not do their operations generally for a "container" object like this type.
    //
    //  2. If user will use `const { ok, err }` = Ok;`, then val will be `undefined`.
    //     it's will not be a problem because `err` would be `undefined` if this type is `Ok`.
    //     We can say same thing for `Err`.
    //
    // By these reasons, we should not recommend to create this object without this factory function.
    // User can create this object by hand. But it's fragile for the future change. So We should not recommend it.
    readonly err?: undefined;
}

export function isOk<T, E>(input: Result<T, E>): input is Ok<T> {
    return input.ok;
}

export function createOk<T>(val: T): Ok<T> {
    const r: Ok<T> = {
        ok: true,
        val,
        err: undefined,
    };
    return r;
}

export interface Err<E> {
    readonly ok: false;

    // To keep the same shape (hidden class or structure) with the other.
    // we should initialize this property.
    //
    // As I remembered, when I had introduced this property in early 2018,
    // I tested a shape transition for some engines. By their results,
    // I concluded `Ok` and `Err` should have same properties to make to use the same shape.
    //
    //  - V8 used an another hidden class if `val` is `number` or others.
    //      - Inline cache for an object taking this type would be polymorphic.
    //      - But we can assume that it will not be megamorphic by the observation.
    //  - JavaScriptCore used a single structure, not like as V8.
    //      - Inline cache would be monomorphic.
    //  - SpiderMonkey, I did not test it. But I assumed it would behave similary with other engines.
    //      - I had not known how I trace for SM casually...
    //
    // Of course, this decision has some drawbacks for users of this package.
    //
    //  1. If user use `Object.hasOwnProperty` or `for-in` statement fot this object,
    //     this property will be leaked accidentally.
    //     However, we don't think it is a common operation for user because we provide `is~~()` function
    //     and user will not do their operations generally for a "container" object like this type.
    //
    //  2. If user will use `const { ok, err }` = Ok;`, then val will be `undefined`.
    //     it's will not be a problem because `err` would be `undefined` if this type is `Ok`.
    //     We can say same thing for `Err`.
    //
    // By these reasons, we should not recommend to create this object without this factory function.
    // User can create this object by hand. But it's fragile for the future change. So We should not recommend it.
    readonly val?: undefined;

    readonly err: E;
}

export function isErr<T, E>(input: Result<T, E>): input is Err<E> {
    return !input.ok;
}

export function createErr<E>(err: E): Err<E> {
    const r: Err<E> = {
        ok: false,
        val: undefined,
        err: err,
    };
    return r;
}
