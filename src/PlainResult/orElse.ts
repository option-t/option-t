import { MapFn } from '../shared/Function';
import { Result } from './Result';

export type FlatmapErrFn<T, E, F> = MapFn<E, Result<T, F>>;

export function orElseForResult<T, E, F>(a: Result<T, E>, errSelector: FlatmapErrFn<T, E, F>): Result<T, F> {
    if (a.ok) {
        return a;
    }
    else {
        const r = errSelector(a.err);
        return r;
    }
}
