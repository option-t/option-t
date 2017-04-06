import { isNotNull, Nullable } from './Nullable';

export function andNullable<T, U>(a: Nullable<T>, b: Nullable<U>): Nullable<U> {
    return isNotNull(a) ? b : a;
}