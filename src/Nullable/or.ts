import { Nullable, isNotNull } from './Nullable';

export function orNullable<T>(a: Nullable<T>, b: Nullable<T>): Nullable<T> {
    return isNotNull(a) ? a : b;
}