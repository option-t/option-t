import { TapFn } from '../shared/Function';
import { Maybe } from './Maybe';

/**
 *  * Return _v_ directly.
 *      * This value is passed as the input. But it maybe mutated by calling _fn_.
 *  * Call _fn_ with _v_ if _v_ is not `null` and `undefined`.
 */
export function tapMaybe<T>(v: Maybe<T>, fn: TapFn<T>): Maybe<T> {
    if (v !== undefined && v !== null) {
        fn(v);
    }

    return v;
}
