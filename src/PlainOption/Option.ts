export type Option<T> = Some<T> | None;

export type Some<T> = {
    readonly ok: true;
    readonly val: T;
};

export function isSome<T>(v: Option<T>): v is Some<T> {
    return v.ok;
}

export function createSome<T>(val: T): Some<T> {
    const r: Some<T> = {
        ok: true,
        val,
    };
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
};

export function isNone<T>(v: Option<T>): v is None {
    return !v.ok;
}

export function createNone(): None {
    const r: None = {
        ok: false,
        val: undefined,
    };
    return r;
}
