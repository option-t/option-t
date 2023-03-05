import type { Option } from './option_.js';

/**
 *  Return _b_ if _a_ is `Some(T)`.
 *  Otherwise, return _a_.
 */
export function andForOption<T, U>(a: Option<T>, b: Option<U>): Option<U> {
    if (a.ok) {
        return b;
    }

    return a;
}
