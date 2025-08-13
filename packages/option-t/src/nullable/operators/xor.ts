import { type Nullable, isNull } from '../core/nullable.js';

/**
 *  Return one of this pattern:
 *
 *  1. a=others, b=null => _a_
 *  2. a=null, b=others => _b_
 *  3. Others => `null`
 */
export function xorForNullable<T>(a: Nullable<T>, b: Nullable<T>): Nullable<T> {
    const aIsNull = isNull(a);
    const bIsNull = isNull(b);

    if (!aIsNull && bIsNull) {
        return a;
    } else if (aIsNull && !bIsNull) {
        return b;
    } else {
        return null;
    }
}
