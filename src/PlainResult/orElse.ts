import { MapFn } from '../shared/Function';
import { Result } from './Result';

export type FlatmapErrFn<T, E, F> = MapFn<E, Result<T, F>>;

/**
 *  Calls _errSelector_  and return its returned value
 *  if the result is `Err(E)`, otherwise returns the `Ok(T)` value of self.
 *  This function can be used for control flow based on result values.
 */
export function orElseForResult<T, E, F>(a: Result<T, E>, errSelector: FlatmapErrFn<T, E, F>): Result<T, F> {
    if (a.ok) {
        return a;
    }
    else {
        const r = errSelector(a.err);
        return r;
    }
}
