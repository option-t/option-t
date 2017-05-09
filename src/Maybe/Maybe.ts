export type Maybe<T> = T | null | undefined;

export function isSomeValue<T>(v: Maybe<T>): v is T {
    return v !== undefined && v !== null;
}

export function isNullOrUndefined<T>(v: Maybe<T>): v is null | undefined {
    return v === undefined || v === null;
}
