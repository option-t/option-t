export type NotNullAndUndefined<T> = T extends null | undefined ? never : T;

export type Maybe<T> = T | null | undefined;

export function isNotNullAndUndefined<T>(input: Maybe<T>): input is NotNullAndUndefined<T> {
    return input !== undefined && input !== null;
}

export function isNullOrUndefined<T>(input: Maybe<T>): input is null | undefined {
    return input === undefined || input === null;
}
