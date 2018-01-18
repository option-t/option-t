import { TapFn } from '../utils/Function';
import { Nullable } from './Nullable';

export function tapNullable<T>(v: Nullable<T>, fn: TapFn<T>): void {
    if (v === null) {
        return;
    }

    fn(v);
}
