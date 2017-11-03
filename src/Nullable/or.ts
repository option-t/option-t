import { Nullable } from './Nullable';

export function orForNullable<T>(a: Nullable<T>, b: Nullable<T>): Nullable<T> {
    return (a !== null) ? a : b;
}
