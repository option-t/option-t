import { Option } from './Option.js';

/**
 *  Return _a_ if _a_ is `Some(T)`.
 *  Otherwise, return _b_.
 */
export function orForOption<T>(a: Option<T>, b: Option<T>): Option<T> {
    if (a.ok) {
        return a;
    }

    return b;
}
