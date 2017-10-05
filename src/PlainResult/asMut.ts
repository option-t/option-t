import { Result, MutResult } from './Result';

export function asMutResult<T, E>(v: Result<T, E>): MutResult<T, E> {
    return v as MutResult<T, E>;
}
