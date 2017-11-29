import { RecoveryFn } from '../utils/Function';
import { Maybe } from './Maybe';

export function unwrapOrElseFromMaybe<T>(v: Maybe<T>, def: RecoveryFn<T>): T {
    return (v !== undefined && v !== null) ? v : def();
}
