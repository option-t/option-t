import type { Result } from '../core/result.js';
import {
    isNotSameOkField,
    isSameErrField,
    isSameValField,
} from '../internal/intrinsics_compare.js';

/**
 *  Return `true`:
 *      1. if `lhs === rhs`.
 *      2. if _lhs_ and _rhs_ is same kind, and they contain same value.
 *
 *  Otherwise, return `false`.
 *
 *  This function is designed for `Result<T, E>`.
 *  This function may return `true` if input values has same properties with `Result<T, E>`
 *  and their properties are same between _lhs_ and _rhs_.
 */
export function equalForResult<T, E>(lhs: Result<T, E>, rhs: Result<T, E>): boolean {
    if (lhs === rhs) {
        return true;
    }

    if (isNotSameOkField(lhs, rhs)) {
        return false;
    }

    const isEqual = isSameValField(lhs, rhs) && isSameErrField(lhs, rhs);
    return isEqual;
}
