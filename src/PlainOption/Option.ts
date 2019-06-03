export type Option<T> = Some<T> | None;

declare const marker: unique symbol;

export type Some<T> = {
    readonly ok: true;
    readonly val: T;

    // This field makes incompatible the type with `PlainOption::Option`.
    // We'd like to tread this as like phantom type.
    // So we don't supply this field actually for the runtime
    // and this will be used only for static type checking.
    readonly [marker]: unique symbol;
};

export function isSome<T>(v: Option<T>): v is Some<T> {
    return v.ok;
}

export function createSome<T>(val: T): Some<T> {
    const r: Some<T> = {
        ok: true,
        val,

        // For keeping the object structure minimally,
        // treat `[marker]` field as like "Phantom Type",
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any;
    return r;
}

export type None = {
    readonly ok: false;

    // To keep the same shape (hidden class or structure) with Some<T>,
    // we should initialize this property.
    // If user use `Object.hasOwnProperty` or `for-in` statement fot this object,
    // this property will be leaked accidentally.
    // However, we don't think it is not comment operation for user
    // Because we provide `is~~()` function
    // and user will not do their operations for a "container" object like this.
    // Even if user will use `const { ok, val }` = None;`, then val will be undefined.
    // It's will not be a problem.
    readonly val?: undefined;

    // This field makes incompatible the type with `PlainOption::Option`.
    // We'd like to tread this as like phantom type.
    // So we don't supply this field actually for the runtime
    // and this will be used only for static type checking.
    readonly [marker]: unique symbol;
};

export function isNone<T>(v: Option<T>): v is None {
    return !v.ok;
}

export function createNone(): None {
    const r: None = {
        ok: false,
        val: undefined,

        // For keeping the object structure minimally,
        // treat `[marker]` field as like "Phantom Type",
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any;
    return r;
}
