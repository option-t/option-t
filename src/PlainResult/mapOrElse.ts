import { MapFn, RecoveryWithErrorFn } from '../shared/Function';
import { Result } from './Result';

export function mapOrElseForResult<T, E, U>(src: Result<T, E>, fallback: RecoveryWithErrorFn<E, U>, selector: MapFn<T, U>): U {
    if (src.ok) {
        const r: U = selector(src.val);
        return r;
    }
    else {
        const r: U = fallback(src.err);
        return r;
    }
}
