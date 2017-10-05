import { FlatmapErrFn } from './Function';
import { Result, isOk } from './Result';

export function orElseForResult<T, E, F>(a: Result<T, E>, errSelector: FlatmapErrFn<T, E, F>): Result<T, F> {
    if (isOk(a)) {
        return a;
    }
    else {
        const r = errSelector(a.err);
        return r;
    }
}
