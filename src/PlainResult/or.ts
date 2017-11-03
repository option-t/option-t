import { Result } from './Result';

export function orForResult<T, E, F>(a: Result<T, E>, b: Result<T, F>): Result<T, F> {
    return a.ok ? a : b;
}
