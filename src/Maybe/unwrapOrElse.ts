import { RecoveryFn } from './Function';
import { Maybe, isNotNullAndUndefined } from './Maybe';

export function unwrapOrElseFromMaybe<T>(v: Maybe<T>, def:  RecoveryFn<T>): T {
    return isNotNullAndUndefined(v) ? v : def();
}
