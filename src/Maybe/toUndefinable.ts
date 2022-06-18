import type { Undefinable } from '../Undefinable';
import { type Maybe, isNullOrUndefined } from './Maybe';

export function toUndefinableFromMaybe<T>(input: Maybe<T>): Undefinable<T> {
    if (isNullOrUndefined(input)) {
        return undefined;
    }

    return input;
}
