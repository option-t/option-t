import { Option, isSome, createNone } from './Option';

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
    else if (!aIsSome && bIsSome) {
        return b;
    }
    else {
        return createNone();
    }
}
