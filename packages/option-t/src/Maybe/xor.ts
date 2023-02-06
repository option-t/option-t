import { Maybe, isNotNullAndUndefined } from './Maybe.js';

/**
 *  Return one of this pattern:
 *
 *  1. a=others, b=null|undefined => _a_
 *  2. a=null|undefined, b=others => _b_
 *  3. Others => `undefined`
 */
export function xorForMaybe<T>(a: Maybe<T>, b: Maybe<T>): Maybe<T> {
    const aIsSome = isNotNullAndUndefined(a);
    const bIsSome = isNotNullAndUndefined(b);

    if (aIsSome && !bIsSome) {
        return a;
    }

    if (!aIsSome && bIsSome) {
        return b;
    }

    // XXX: We can choose both `null` and `undefined`.
    // But we return `undefined` to sort with [Optional Chaining](https://github.com/TC39/proposal-optional-chaining)
    return undefined;
}
