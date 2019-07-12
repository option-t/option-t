import { Maybe, isNotNullAndUndefined } from './Maybe';

/**
 *  Return one of this pattern:
 *
 *  1. a=others, b=null|undefined => _a_
 *  2. a=null|undefined, b=others => _b_
 *  3. Others => `null|undefined`
 */
export function xorForMaybe<T>(a: Maybe<T>, b: Maybe<T>): Maybe<T> {
    const aIsSome = isNotNullAndUndefined(a);
    const bIsSome = isNotNullAndUndefined(b);

    if (aIsSome && !bIsSome) {
        return a;
    }
    else if (!aIsSome && bIsSome) {
        return b;
    }
    else {
        // XXX: We can return both `null` and `undefined`.
        // I choose `null` as an explicit value.
        // For the future, this value might be changed to `undefined`
        // to make this compatible with [Nullish Coalescing](https://github.com/tc39/proposal-nullish-coalescing)
        // or [Optional Chaining](https://github.com/TC39/proposal-optional-chaining).
        return null;
    }
}
