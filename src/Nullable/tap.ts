import { TapFn } from '../utils/Function';
import { Nullable } from './Nullable';

/**
 *  Call _fn_ with _v_ if _v_ is not `null`.
 */
export function tapNullable<T>(v: Nullable<T>, fn: TapFn<T>): void {
    if (v === null) {
        return;
    }

    fn(v);
}
