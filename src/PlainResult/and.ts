import { Result, isOk } from './Result';

export function andForResult<T, U, E>(a: Result<T, E>, b: Result<U, E>): Result<U, E> {
    return isOk(a) ? b : a;
}
