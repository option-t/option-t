import type { Option } from './option_.js';

/**
 *  Return `true`:
 *      1. if `lhs === rhs`.
 *      2. if _lhs_ and _rhs_ is same kind, and they contain same value.
 *
 *  Otherwise, return `false`.
 *
 *  This function is designed for `Option<T>`.
 *  This function may return `true` if input values has same properties with `Option<T>`
 *  and their properties are same between _lhs_ and _rhs_.
 */
export function equalForOption<T>(lhs: Option<T>, rhs: Option<T>): boolean {
    if (lhs === rhs) {
        return true;
    }

    if (lhs.ok !== rhs.ok) {
        return false;
    }

    const isEqual = lhs.val === rhs.val;
    return isEqual;
}
