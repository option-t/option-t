import { isNotNullAndUndefined, Maybe, NotNullAndUndefined } from './Maybe';

/**
 *  Return _input_ as `T` if the passed _input_ is not `null` and `undefined`.
 *  Otherwise, throw `TypeError` with the passed `msg`.
 */
export function expectNotNullAndUndefined<T>(input: Maybe<T>, msg: string): NotNullAndUndefined<T> {
    if (isNotNullAndUndefined(input)) {
        return input;
    }

    throw new TypeError(msg);
}
