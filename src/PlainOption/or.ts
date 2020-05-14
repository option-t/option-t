import { Option } from './Option.ts';

/**
 *  Return _a_ if _a_ is `Some(T)`.
 *  Otherwise, return _b_.
 */
export function orForOption<T>(a: Option<T>, b: Option<T>): Option<T> {
    return a.ok ? a : b;
}
