export type NotNull<T> = T extends null ? never : T;

export type Nullable<T> = T | null;

export function isNotNull<T>(input: Nullable<T>): input is NotNull<T> {
    return input !== null;
}

export function isNull<T>(input: Nullable<T>): input is null {
    return input === null;
}
