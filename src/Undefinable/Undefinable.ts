export type NotUndefined<T> = T extends undefined ? never : T;

export type Undefinable<T> = T | undefined;

export function isNotUndefined<T>(v: Undefinable<T>): v is NotUndefined<T> {
    return v !== undefined;
}

export function isUndefined<T>(v: Undefinable<T>): v is undefined {
    return v === undefined;
}
