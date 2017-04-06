export type Maybe<T> = T | undefined | null;

export function isSomeActual<T>(v: Maybe<T>): v is T {
    return v !== undefined && v !== null;
}

export function isUndefinedOrNull<T>(v: Maybe<T>): v is undefined | null {
    return v === undefined || v === null;
}