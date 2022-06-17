export type NotUndefined<T> = T extends undefined ? never : T;

export type Undefinable<T> = T | undefined;

export function isNotUndefined<T>(input: Undefinable<T>): input is NotUndefined<T> {
    return input !== undefined;
}

export function isUndefined<T>(input: Undefinable<T>): input is undefined {
    return input === undefined;
}
