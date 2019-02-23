export type NotNull<T> = T extends null ? never : T;

export type Nullable<T> = T | null;

export function isNotNull<T>(v: Nullable<T>): v is NotNull<T> {
    return v !== null;
}

export function isNull<T>(v: Nullable<T>): v is null {
    return v === null;
}
