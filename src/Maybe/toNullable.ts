import type { Nullable } from '../Nullable';
import { type Maybe, isNullOrUndefined } from './Maybe';

export function toNullableFromMaybe<T>(input: Maybe<T>): Nullable<T> {
    if (isNullOrUndefined(input)) {
        return null;
    }

    return input;
}
