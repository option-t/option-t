import { type Option, isSome, createNone } from './Option.js';

/**
 *  Return one of this pattern:
 *
 *  1. a=Some, b=None => _a_
 *  2. a=None, b=Some => _b_
 *  3. Others => `None`
 */
export function xorForOption<T>(a: Option<T>, b: Option<T>): Option<T> {
    const aIsSome = isSome(a);
    const bIsSome = isSome(b);

    if (aIsSome && !bIsSome) {
        return a;
    }

    if (!aIsSome && bIsSome) {
        return b;
    }

    return createNone();
}
