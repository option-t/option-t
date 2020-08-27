import { Undefinable, isNotUndefined } from './Undefinable';

/**
 *  Return one of this pattern:
 *
 *  1. a=others, b=undefined => _a_
 *  2. a=undefined, b=others => _b_
 *  3. Others => `undefined`
 */
export function xorForUndefinable<T>(a: Undefinable<T>, b: Undefinable<T>): Undefinable<T> {
    const aIsSome = isNotUndefined(a);
    const bIsSome = isNotUndefined(b);

    if (aIsSome && !bIsSome) {
        return a;
    } else if (!aIsSome && bIsSome) {
        return b;
    } else {
        return undefined;
    }
}
