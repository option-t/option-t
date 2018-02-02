import { TapFn } from '../utils/Function';
import { Maybe } from './Maybe';

/**
 *  Call _fn_ with _v_ if _v_ is not `null` and `undefined`.
 */
export function tapMaybe<T>(v: Maybe<T>, fn: TapFn<T>): void {
    if (v === undefined || v === null) {
        return;
    }

    fn(v);
}
