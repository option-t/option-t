import { DoFn } from './Function';
import { isNone, Option } from './Option';

export function doOnOption<T>(v: Option<T>, fn: DoFn<T>): void {
    if (isNone(v)) {
        return;
    }

    fn(v.val);
}
