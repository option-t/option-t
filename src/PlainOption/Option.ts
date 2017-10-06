export type Option<T> = Some<T> | None;

/**
 *  This allows to mutate the value to save needless allocation.
 */
export type MutOption<T> = MutSome<T> | None;

/**
 *  This allows to mutate the value to save needless allocation.
 */
export type MutSome<T> = {
    readonly ok: true;
    val: T;
};

export type Some<T> = Readonly<MutSome<T>>;

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

export type None = Readonly<{
    ok: false;
}>;

export function isNone<T>(v: Option<T>): v is None {
    return !v.ok;
}

export function createNone(): None {
    const r: None = {
        ok: false,
    };
    return r;
}
