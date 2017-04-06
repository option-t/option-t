export type Nullable<T> = T | null;

export function isNotNull<T>(v: Nullable<T>): v is T {
    return v !== null;
}

export function isNull<T>(v: Nullable<T>): v is null {
    return v === null;
}
