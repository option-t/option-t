import { Nullable } from './Nullable';

export function orNullable<T>(a: Nullable<T>, b: Nullable<T>): Nullable<T> {
    return (a !== null) ? a : b;
}
