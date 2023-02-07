import { type Maybe, type NotNullAndUndefined, isNotNullAndUndefined } from '../Maybe/Maybe.js';
import { type Nullable, type NotNull, isNotNull, expectNotNull } from '../Nullable/Nullable.js';
import {
    createSome,
    createNone,
    type Option as PlainOption,
    isSome,
} from '../PlainOption/Option.js';
import { unwrapOption } from '../PlainOption/unwrap.js';
import {
    type Undefinable,
    type NotUndefined,
    expectNotUndefined,
    isNotUndefined,
} from '../Undefinable/Undefinable.js';

import { ClassicOption, createClassicNone, createClassicSome } from './ClassicOption.js';

/**
 *  Return `PlainOption`'s `Some(T)` with the inner T if _classic_ is `ClassicSome(T)`.
 *  Otherwise, return `PlainOption`'s `None`.
 */
export function compatToPlainOption<T>(classic: ClassicOption<T>): PlainOption<T> {
    if (classic.isSome) {
        const val: T = classic.unwrap();
        const result = createSome<T>(val);
        return result;
    }

    const result = createNone();
    return result;
}

/**
 *  Return `ClassicNone` if _plain_ is `PlainOption`'s `None`.
 *  Otherwise, return `ClassicSome(T)` with _plain_'s inner value `T`.
 */
export function compatToClassicOption<T>(plain: PlainOption<T>): ClassicOption<T> {
    if (isSome(plain)) {
        const val: T = unwrapOption(plain);
        const result = createClassicSome<T>(val);
        return result;
    }

    const result = createClassicNone<T>();
    return result;
}

const ERR_MSG_CANNOT_CONVERT_TO_NULLABLE = `ClassicOption<T>'s inner value is null. This type cannot be converted to Nullable<T>`;

/**
 *  Return the inner `T` if _input_ is `ClassicSome(T)`.
 *  Otherwise, return `null.
 */
export function compatToNullableFromClassicOption<T>(
    input: ClassicOption<NotNull<T>>
): Nullable<T> {
    if (input.isNone) {
        return null;
    }

    const inner = input.unwrap();
    const value: T = expectNotNull(inner, ERR_MSG_CANNOT_CONVERT_TO_NULLABLE);
    return value;
}

/**
 *  Return `ClassicNone` if _input_ is `null`.
 *  Otherwise, return `ClassicSome(T)` with _input_ `T`.
 */
export function compatToClassicOptionFromNullable<T>(input: Nullable<T>): ClassicOption<T> {
    if (isNotNull(input)) {
        const result = createClassicSome<NotNull<T>>(input);
        return result;
    }

    const result = createClassicNone<NotNull<T>>();
    return result;
}

const ERR_MSG_CANNOT_CONVERT_TO_UNDEFINABLE = `ClassicOption<T>'s inner value is undefined. This type cannot be converted to Undefinable<T>`;

/**
 *  Return the inner `T` if _input_ is `ClassicSome(T)`.
 *  Otherwise, return `null.
 */
export function compatToUndefinableFromClassicOption<T>(
    input: ClassicOption<NotUndefined<T>>
): Undefinable<T> {
    if (input.isNone) {
        return undefined;
    }

    const inner = input.unwrap();
    const value: T = expectNotUndefined(inner, ERR_MSG_CANNOT_CONVERT_TO_UNDEFINABLE);
    return value;
}

/**
 *  Return `ClassicNone` if _input_ is `undefined`.
 *  Otherwise, return `ClassicSome(T)` with _input_ `T`.
 */
export function compatToClassicOptionFromUndefinable<T>(input: Undefinable<T>): ClassicOption<T> {
    if (isNotUndefined(input)) {
        const result = createClassicSome<NotUndefined<T>>(input);
        return result;
    }

    const result = createClassicNone<NotUndefined<T>>();
    return result;
}

/**
 *  Return `ClassicNone` if _input_ is `null` or `undefined`.
 *  Otherwise, return `ClassicSome(T)` with _input_ `T`.
 */
export function compatToClassicOptionFromMaybe<T>(input: Maybe<T>): ClassicOption<T> {
    if (isNotNullAndUndefined(input)) {
        const result = createClassicSome<NotNullAndUndefined<T>>(input);
        return result;
    }

    const result = createClassicNone<NotNullAndUndefined<T>>();
    return result;
}
