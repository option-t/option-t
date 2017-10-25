import { DoFn } from '../utils/Function';
import { Maybe, isNullOrUndefined } from './Maybe';

export function doOnMaybe<T>(v: Maybe<T>, fn: DoFn<T>): void {
    if (isNullOrUndefined(v)) {
        return;
    }

    fn(v);
}
