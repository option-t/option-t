import { Nullable } from './Nullable';

export function andNullable<T, U>(a: Nullable<T>, b: Nullable<U>): Nullable<U> {
    return (a !== null) ? b : a;
}
