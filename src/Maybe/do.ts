import { DoFn } from '../utils/Function';
import { Maybe } from './Maybe';

export function doOnMaybe<T>(v: Maybe<T>, fn: DoFn<T>): void {
    if (v === undefined || v === null) {
        return;
    }

    fn(v);
}
